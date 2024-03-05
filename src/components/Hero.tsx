import { useUi } from "../hooks/useUi";
import { AppComponents } from "./App";
import Section from "./ui/Section";
import Title from "./ui/Title";
import Button from "./ui/Button";

import imgHeroBg from "../assets/img/hero.png";

export default function Hero() {
  const { scrollTo } = useUi();

  return (
    <Section id={AppComponents.hero} bgColor="bg-slate-100">
      <div className="flex w-full lg:w-6/12 md:h-screen max-h-860-px text-left justify-items-start">
        <div className="container flex flex-col my-32 md:my-auto items-start">
          <Title>
            Optimize your{" "}
            <span className="inline-block bg-gradient-to-br font-semibold text-transparent from-coredataBlue via-coredataViolet to-indigo-600 bg-clip-text shadow-none">
              business
            </span>
          </Title>
          <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            We support business development by automation and optimization of
            business processes. We create the right tools and provide IT
            consultations.
          </p>
          <div className="relative flex w-50 h-12 mt-12">
            <div className="absolute inline-flex h-full w-full rounded-xl bg-indigo-600 opacity-20 animate-ping"></div>
            <div className="relative inline-flex">
              <Button
                label="Find out more"
                icon="fi fi-sr-arrow-right"
                onClick={() => scrollTo(AppComponents.about)}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 w-10/12 max-h-860px hidden lg:block"
        src={imgHeroBg}
        alt=""
      />
    </Section>
  );
}
