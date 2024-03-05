import { AppComponents } from "./App";
import Header, { HeaderTheme } from "./ui/Header";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";
import Symbol from "./ui/Symbol";

import imgAutomation from "../assets/img/automation.png";
import imgAutomationProcess from "../assets/img/automation-process.png";

export default function Automation() {
  return (
    <Section
      id={AppComponents.automation}
      bgColor="bg-slate-100"
      style="relative pt-28 md:pt-20 bg-gradient-to-b from-blue-500 to-indigo-900"
    >
      <Spacer color={"text-slate-100"} fillColor={"fill-blue-500"} />
      <div className="flex flex-wrap justify-between items-center text-left">
        <div className="hidden lg:block w-6/12 px-10">
          <div className="relative flex flex-col w-full mb-6">
            <img alt="..." className="max-w-full" src={imgAutomation} />
          </div>
        </div>

        <div className="w-full lg:w-6/12 px-4 mb-20">
          <Symbol icon="fi fi-sr-robot" />
          <Header
            message={`AI Automation solutions`}
            theme={HeaderTheme.Light}
          />
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            We create solutions that allow for the automation of business
            processes using such AI technologies as Machine Learning.
          </p>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            We adapt the solution to the specifics of each problem. The
            implementation of automation optimizes the use of resources and
            reduces costs.
          </p>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            Our workflow is divided into several stages.
          </p>

          <div className="w-full">
            <div className="flex flex-col w-full mb-6 lg:mt-10">
              <img
                alt=""
                src={imgAutomationProcess}
                className="w-full align-middle"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
