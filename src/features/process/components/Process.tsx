import { useEffect, useRef } from "react";
import { ThicknessValue, ThicknessLevel } from "../types/thickness";
import {
  Connectors,
  DecorCircles,
  MainCount,
  MainCircles,
  ThicknessLevels,
  SizeLevels,
  ColorVariants,
} from "../utils/config";
import { Item } from "../types/item";
import { Link } from "../types/link";
import { Pointer } from "../types/pointer";

export default function Process() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pointer: Pointer = { x: 0, y: 0, in: false };
  const pushEffectItemReach = 260; // pointer distance from circle to begin push effect
  const pushEffectForce = 90; // max displacement in px when pointer is on circle
  const pushEffectCurve = 1.5; // higher value, the repulsion is gentle from a distance and strong up close
  const pushEffectSmoothness = 5; // smooth, frame-rate independent easing

  useEffect(() => {
    if (!stageRef.current) {
      return;
    }
    const stage = stageRef.current;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const allCircles = [...MainCircles, ...DecorCircles];
    const items: Item[] = allCircles.map((c, i) => ({
      el: circleRefs.current[i] as HTMLDivElement,
      main: i < MainCount,
      fx: c.x,
      fy: c.y,
      x: 0,
      y: 0,
      hx: 0,
      hy: 0,
      r: 0,
    }));
    const links: Link[] = Connectors.map(([a, b, weight], idx) => {
      const thickness: ThicknessValue =
        ThicknessLevels[weight as ThicknessLevel];
      return {
        el: linkRefs.current[idx] as HTMLDivElement,
        a: items[a],
        b: items[b],
        h: thickness.px,
      };
    });

    let stageWidth = 0,
      stageHeight = 0,
      ready = false,
      active = false,
      raf = 0;
    let last = performance.now();

    /**
     * Measures rendered dimensions, converts % to px
     */
    const measure = () => {
      stageWidth = stage.clientWidth;
      stageHeight = stage.clientHeight;
      items.forEach((item) => {
        item.r = item.el.offsetWidth / 2;
        item.hx = item.fx * stageWidth;
        item.hy = item.fy * stageHeight;
        if (!ready || item.main) {
          item.x = item.hx;
          item.y = item.hy;
        }
      });
      ready = true;
    };

    const reset = () => {
      items.forEach((item) => {
        item.el.style.transform = "";
      });
      links.forEach((link) => {
        link.el.style.transform = "";
        link.el.style.width = "";
      });
      ready = false;
    };

    const render = () => {
      items.forEach((item) => {
        item.el.style.transform =
          "translate3d(" +
          (item.x - item.r) +
          "px," +
          (item.y - item.r) +
          "px,0)";
      });
      links.forEach((link) => {
        const dx = link.b.x - link.a.x,
          dy = link.b.y - link.a.y;
        const len = Math.hypot(dx, dy);
        const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
        link.el.style.width = len + "px";
        link.el.style.transform =
          "translate3d(" +
          link.a.x +
          "px," +
          (link.a.y - link.h / 2) +
          "px,0) rotate(" +
          ang +
          "deg)";
      });
    };

    /**
     * Animation loop, runs on every frame
     */
    const animationTick = (now: number) => {
      raf = requestAnimationFrame(animationTick);

      const dt = Math.min((now - last) / 1000, 0.05); // time from last frame, max 0.05 = 50ms
      last = now;

      if (!desktop.matches) {
        // reset and skip for mobile
        if (active) {
          reset();
          active = false;
        }
        return;
      }
      if (!active) {
        active = true;
        ready = false;
      }
      if (
        !ready ||
        stageWidth !== stage.clientWidth ||
        stageHeight !== stage.clientHeight
      ) {
        measure();
      }

      const k = 1 - Math.exp(-dt * pushEffectSmoothness);
      const pointerIn = pointer.in && !reduced.matches;

      items.forEach((item) => {
        if (item.main) return; // main circles never move

        let tx = item.hx,
          ty = item.hy;
        if (pointerIn) {
          const dx = item.x - pointer.x,
            dy = item.y - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;
          const reach = item.r + pushEffectItemReach;
          if (distance < reach) {
            // push effect
            const f =
              Math.pow(1 - distance / reach, pushEffectCurve) * pushEffectForce;
            tx += (dx / distance) * f;
            ty += (dy / distance) * f;
          }
        }

        // stay inside the stage
        tx = Math.min(Math.max(tx, item.r), stageWidth - item.r);
        ty = Math.min(Math.max(ty, item.r), stageHeight - item.r);

        // don't slide over the main circles
        for (let m = 0; m < MainCount; m++) {
          const mainItem = items[m];
          const ddx = tx - mainItem.hx,
            ddy = ty - mainItem.hy;
          const dd = Math.hypot(ddx, ddy) || 1;
          const minD = mainItem.r + item.r - 1;
          if (dd < minD && dd > 0) {
            tx = mainItem.hx + (ddx / dd) * minD;
            ty = mainItem.hy + (ddy / dd) * minD;
          }
        }

        // smooth item move
        item.x += (tx - item.x) * k;
        item.y += (ty - item.y) * k;
      });
      render();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const b = stage.getBoundingClientRect();
      pointer.x = event.clientX - b.left;
      pointer.y = event.clientY - b.top;
      pointer.in = true;
    };
    const onPointerLeave = () => {
      pointer.in = false;
    };

    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerleave", onPointerLeave);
    raf = requestAnimationFrame(animationTick);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerleave", onPointerLeave);
      reset();
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto flex flex-col items-center gap-8 lg:block lg:aspect-[1063/701]"
    >
      {MainCircles.map((circle, idx) => (
        <div
          key={circle.title}
          ref={(el: HTMLDivElement) => {
            circleRefs.current[idx] = el;
          }}
          className={`z-20 aspect-square w-60 max-w-full will-change-transform lg:absolute lg:left-0 lg:top-0`}
        >
          <div
            className={`main-circle flex flex-col h-full w-full p-6 px-[10%] items-center justify-center text-center rounded-full cursor-default transition-all duration-500 ease-in-out ${ColorVariants[circle.color]} hover:scale-110 hover:shadow-2xl motion-reduce:transition-none`}
          >
            <h3 className="mb-2 text-xl font-bold lg:text-[clamp(1rem,1.9vw,1.4rem)]">
              {circle.title}
            </h3>
            <p className="text-xs leading-relaxed text-white lg:text-[clamp(8.5px,0.95vw,12px)]">
              {circle.text}
            </p>
          </div>
        </div>
      ))}

      {DecorCircles.map((circle, idx) => (
        <div
          key={idx}
          ref={(el: HTMLDivElement) => {
            circleRefs.current[MainCount + idx] = el;
          }}
          className={`pointer-events-none absolute left-0 top-0 z-10 hidden aspect-square will-change-transform lg:block ${SizeLevels[circle.size]}`}
        >
          <div
            className={`h-full w-full rounded-full ${ColorVariants.default}`}
          />
        </div>
      ))}

      {Connectors.map(([a, b, w], idx) => (
        <div
          key={idx}
          ref={(el: HTMLDivElement) => {
            linkRefs.current[idx] = el;
          }}
          className={`${a < MainCount && b < MainCount ? "block" : "hidden lg:block"} pointer-events-none absolute left-0 top-0 z-0 origin-left rounded-full ${ColorVariants.default} will-change-transform ${ThicknessLevels[w as ThicknessLevel].cls}`}
        />
      ))}
    </div>
  );
}
