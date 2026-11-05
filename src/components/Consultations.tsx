import imgConsulting from "../assets/img/consulting.webp";
import imgExpertice from "../assets/img/expertice.webp";
import { AppComponents } from "../utils/common";
import BulletPoint from "./ui/BulletPoint";
import Caption from "./ui/Caption";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";

export default function Consultations() {
  return (
    <>
      <Section
        id={AppComponents.consultations}
        bgColor="bg-slate-100"
        style="relative bg-linear-to-b from-slate-100 to-white"
      >
        <Spacer color={"text-slate-100"} fillColor={"fill-slate-100"} />
        <div className="flex flex-wrap items-center text-left mb-20">
          <div className="w-full lg:w-6/12">
            <div className="lg:pr-12">
              <Caption message="Consulting" />
              <Header message={`Expert IT Consultations`} />
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Navigating the rapidly evolving technology landscape requires
                more than just code, it demands strategic foresight. Our expert
                IT consulting services provide your business with deep technical
                analysis, actionable insights, and a clear roadmap for digital
                success.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                We analyze your current ecosystem to identify bottlenecks,
                mitigate risks, and uncover hidden opportunities for growth.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Partner with our senior specialists to bridge the gap between
                complex technology and your long-term business objectives.
              </p>
            </div>
          </div>

          <div className="hidden lg:block w-6/12 rounded-4xl shadow-2xl">
            <img
              alt="White board with consulting sketches"
              className="max-w-full rounded-4xl shadow-2xl"
              src={imgConsulting}
            />
          </div>
        </div>

        <div className="flex flex-row justify-start items-start gap-6 mb-10 text-left">
          <div className="relative flex flex-col w-full md:w-5/12">
            <BulletPoint
              title={`Digitizing Your Business`}
              icon={"fi fi-sr-digital-identity"}
            >
              <p className="leading-relaxed">
                Transforming legacy operations into modern, agile digital
                workflows that boost efficiency and prepare your company for{" "}
                <b>AI</b> integration.
              </p>
            </BulletPoint>
          </div>
          <div className="relative flex flex-col w-full md:w-5/12">
            <BulletPoint
              title={`Choosing the Right Tools`}
              icon={"fi fi-sr-select"}
            >
              <p className="leading-relaxed">
                Conducting thorough market and technical evaluations to select
                the optimal software vendors, SaaS platforms, and <b>AI</b>{" "}
                models for your specific budget.
              </p>
            </BulletPoint>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-6 mb-20 text-left">
          <div className="relative flex flex-col w-full md:w-5/12">
            <BulletPoint
              title={`Software Architecture Assessment & Redesign`}
              icon={"fi fi-sr-drafting-compass"}
            >
              <p className="leading-relaxed">
                Analyzing your existing codebase and system infrastructure to
                eliminate technical debt, enhance security, and rebuild for
                scalable future growth.
              </p>
            </BulletPoint>
          </div>
          <div className="relative flex flex-col w-full md:w-5/12">
            <BulletPoint
              title={`Visual Identification`}
              icon={"fi fi-sr-arrows-to-eye"}
            >
              <p className="leading-relaxed">
                Aligning your technical solutions with a powerful corporate
                identity by consulting on user experience standards, interface
                branding, and cohesive visual design.
              </p>
            </BulletPoint>
          </div>
        </div>
      </Section>

      <Section
        id={AppComponents.support}
        bgColor="bg-white"
        style="relative pt-28 md:pt-20"
        size="wide"
      >
        <div className="flex flex-wrap items-center">
          <div className="hidden lg:block w-full">
            <img
              alt="White board with consulting sketches"
              className="w-full max-w-full"
              src={imgExpertice}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
