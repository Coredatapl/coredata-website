import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUi } from "../../hooks/useUi";
import { AppComponents } from "../App";
import Button from "./Button";
import { useUtil } from "../../hooks/useUtil";

interface TopNavProps {
  showNav?: boolean;
}

export default function TopNav({ showNav = true }: TopNavProps) {
  const { scrollTo } = useUi();
  const { targetInside } = useUtil();
  const [navOpen, setNavOpen] = useState(false);
  const topNavRef = useRef<HTMLDivElement>(null);
  const topNavButtonRef = useRef<HTMLButtonElement>(null);

  function handleScroll() {
    setNavOpen(false);
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      !topNavButtonRef.current ||
      !topNavRef.current ||
      !event.target ||
      targetInside(event.target, topNavButtonRef.current)
    ) {
      return;
    }

    if (!targetInside(event.target, topNavRef.current)) {
      setNavOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("scroll", handleScroll, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  if (!showNav) {
    return <></>;
  }

  return (
    <nav
      className="flex flex-wrap justify-end"
      role="navigation"
      ref={topNavRef}
    >
      <div className="flex md:w-auto md:order-2">
        <Button
          label="Contact"
          onClick={() => scrollTo(AppComponents.contact)}
        />
        <button
          className="block md:hidden px-3 py-1 cursor-pointer text-xl leading-none border-2 border-solid border-slate-100 rounded-lg bg-white outline-none focus:outline-none"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          ref={topNavButtonRef}
        >
          <i
            className={`fi ${navOpen ? "fi-sr-cross" : "fi-sr-menu-burger"}`}
          ></i>
        </button>
      </div>
      <div className="md:flex w-full md:w-auto items-center justify-between md:order-1">
        <ul
          className={`${!navOpen ? "hidden md:flex" : "flex"} flex-col md:flex-row mt-4 pr-2 md:pr-0 md:mt-0 text-right`}
        >
          <li className="block mt-4 md:mt-0 md:mx-4 lg:mx-10 my-auto">
            <Link to={"/"} onClick={() => scrollTo(AppComponents.about)}>
              About
            </Link>
          </li>
          <li className="block mt-4 md:mt-0 md:mx-4 my-auto">
            <Link to={"/"} onClick={() => scrollTo(AppComponents.apps)}>
              Solutions
            </Link>
          </li>
          <li className="block mt-4 md:mt-0 md:mx-4 md:mr-10 lg:mx-10 lg:mr-20 my-auto">
            <Link to={"/"} onClick={() => scrollTo(AppComponents.ai)}>
              <span className="font-semibold text-purple-800 hover:text-fuchsia-700">
                AI
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
