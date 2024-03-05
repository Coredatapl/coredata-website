import Section from "./ui/Section";
import Spacer from "./ui/Spacer";
import Symbol from "./ui/Symbol";
import Header from "./ui/Header";
import ListIconItem from "./ui/ListIconItem";
import { AppComponents } from "./App";

import imgOptimization from "../assets/img/desk.jpg";

export default function About() {
  return (
    <Section
      id={AppComponents.about}
      bgColor="bg-slate-200"
      style="relative mt-32 md:mt-48 md:mt-40"
    >
      <Spacer color={"text-slate-100"} fillColor={"fill-slate-200"} />
      <div className="items-center flex flex-wrap justify-between">
        <div className="hidden lg:block w-6/12 px-4 -mt-48">
          <div className="relative flex flex-col min-w-0 max-w-450-px break-words w-full mb-6 shadow-lg rounded-lg">
            <img
              alt=""
              className="rounded-lg shadow-lg"
              src={imgOptimization}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:pl-20">
          <div className="justify-start items-start text-left">
            <Symbol icon="fi fi-sr-bulb" />
            <Header message={`Every element of our life can be optimized`} />
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              The{" "}
              <span className="font-semibold text-blueGray-600">Coredata</span>{" "}
              team is built on a foundation of trust and support, which is
              demonstrated not only in how we work with one another, but how we
              work with our clients too. We focus on continuous development and
              we are open to new opportunities. We believe in harnessing the
              power of automation to unlock people&apos;s unlimited potential.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              We come up with IT solutions which are not only sustainable, but
              which make commercial sense too.
            </p>
            <ul className="list-none mt-6">
              <ListIconItem
                message={`Continuous development`}
                icon={"fi fi-sr-refresh"}
              />
              <ListIconItem
                message={`We are creative thinkers`}
                icon={"fi fi-sr-brain-circuit"}
              />
              <ListIconItem
                message={`Unlimited potential`}
                icon={"fi fi-sr-bolt"}
              />
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
