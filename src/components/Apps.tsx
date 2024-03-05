import Header from "./ui/Header";
import SubHeader from "./ui/SubHeader";
import Section from "./ui/Section";
import Symbol from "./ui/Symbol";
import SubSymbol from "./ui/SubSymbol";
import { AppComponents } from "./App";

import imgApps from "../assets/img/coding.jpg";

export default function Apps() {
  return (
    <Section
      id={AppComponents.apps}
      bgColor="bg-slate-200"
      style="relative pb-20"
    >
      <div className="items-center flex flex-wrap pb-30 justify-between">
        <div className="w-full lg:w-6/12 lg:pr-20">
          <div className="ustify-start items-start text-left">
            <Symbol icon="fi fi-sr-square-terminal" />
            <Header message={`We create web applications and tools`} />
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              We build web apps for efficient management of different business
              activities. We apply smart automation to streamline workflows and
              integrate corporate systems together for coherent operation.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              We build tools and applications that increase productivity and
              simplify business processes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              We&apos;re focused on delivering you the solutions and results
              that make your organisation fit for the future.
            </p>
          </div>

          <div className="flex flex-wrap pb-10 justify-start items-start text-left">
            <div className="w-full md:w-6/12 pr-5">
              <div className="relative flex flex-col mt-4">
                <div className="py-5 flex-auto">
                  <SubSymbol icon="fi fi-sr-computer" />
                  <SubHeader message={`Web Apps`} />
                  <p className="mb-4 text-blueGray-500">
                    Web applications can be used through a browser on any
                    computer with any operating system.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 pr-5">
              <div className="relative flex flex-col min-w-0 md:mt-4">
                <div className="py-5 flex-auto">
                  <SubSymbol icon="fi fi-sr-smartphone" />
                  <SubHeader message={`Mobile Apps`} />
                  <p className="mb-4 text-blueGray-500">
                    Mobile applications are available at any time and are always
                    with you in your pocket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block max-w-450-px w-6/12 px-4 -mb-52">
          <img
            alt=""
            className="max-w-full rounded-lg shadow-lg"
            src={imgApps}
          />
        </div>
      </div>
    </Section>
  );
}
