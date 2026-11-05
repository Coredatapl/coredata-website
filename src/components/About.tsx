import imgOptimization from "../assets/img/desk.webp";
import { AppComponents } from "../utils/common";
import BulletPoint from "./ui/BulletPoint";
import Caption from "./ui/Caption";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";

export default function About() {
  return (
    <Section
      id={AppComponents.about}
      bgColor="bg-slate-200"
      style="relative mt-32 md:mt-48 md:mt-40"
    >
      <Spacer color={"text-slate-100"} fillColor={"fill-slate-200"} />
      <div className="items-center flex flex-wrap justify-between text-blueGray-500">
        <div className="hidden lg:block w-6/12 -mt-48">
          <div className="relative flex flex-col min-w-0 max-w-450-px w-full mb-6 rounded-4xl shadow-2xl">
            <img
              alt="Optimized desktop workspace"
              className="rounded-4xl shadow-2xl"
              src={imgOptimization}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:pl-10">
          <div className="justify-start items-start text-left">
            <Caption message="About us" />
            <Header message={`Driven by Data. Built on Trust`} />
            <p className="mt-4 text-lg leading-relaxed">
              The{" "}
              <span className="font-semibold text-blueGray-600">Coredata</span>{" "}
              team is built on a foundation of trust and support, which is
              demonstrated not only in how we work with one another, but how we
              work with our clients too. We focus on continuous development and
              we are open to new opportunities. We come up with IT solutions
              which are not only sustainable, but which make commercial sense
              too.
            </p>
            <div className="mt-6">
              <BulletPoint
                title={`AI-Driven Innovation`}
                icon={"fi fi-sr-brain-circuit"}
              >
                <p className="leading-relaxed">
                  Transforming complex business workflows into seamless,
                  automated processes through cutting-edge artificial
                  intelligence.
                </p>
              </BulletPoint>
              <BulletPoint
                title={`Data-to-Value Transformation`}
                icon={"fi fi-sr-refresh"}
              >
                <p className="leading-relaxed">
                  Turning unstructured documents and chaotic data into
                  structured, actionable business intelligence.
                </p>
              </BulletPoint>
              <BulletPoint
                title={`Growth & Efficiency`}
                icon={"fi fi-sr-chat-arrow-grow"}
              >
                <p className="leading-relaxed">
                  Delivering custom software solutions designed strictly to
                  optimize your team's time and drastically reduce operational
                  costs.
                </p>
              </BulletPoint>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
