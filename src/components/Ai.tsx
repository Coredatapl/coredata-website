import imgDocuments from "../assets/img/documents-flow.webp";
import imgKnowledge from "../assets/img/knowledge.webp";
import imgAutomation from "../assets/img/decision-making.webp";
import { AppComponents, AppTheme } from "../utils/common";
import BulletPoint from "./ui/BulletPoint";
import Caption from "./ui/Caption";
import DiagramWrapper from "./ui/DiagramWrapper";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";
import ProcessSection from "../features/process/components/ProcessSection";

export default function Ai() {
  return (
    <>
      <Section
        id={AppComponents.ai}
        bgColor="bg-brand-blue"
        style="relative pt-28 md:pt-20 bg-linear-to-b from-brand-blue to-brand-violet"
      >
        <Spacer color={"text-slate-100"} fillColor={"fill-brand-blue"} />

        <div
          id={AppComponents.decisions}
          className="flex flex-wrap pt-20 justify-between items-center text-left text-white"
        >
          <div className="w-full lg:w-6/12 lg:pr-10 px-4 mb-20">
            <Caption
              message="AI Solutions"
              color="brand-violet"
              bgColor="bg-white/80"
            />
            <Header
              message={`AI-Assisted Decision Making`}
              theme={AppTheme.Light}
            />
            <p className="mt-4 mb-4 text-lg leading-relaxed">
              Every successful project relies on making the right choices at the
              right time. While our <b className="tracking-wider">AI</b> tools
              dramatically speed up and improve your decision-making process,
              you remain firmly <b className="tracking-wider">in control</b>{" "}
              with full oversight of the entire development journey. Together,
              we harness this technology to precisely define your client value
              and drive your business forward.
            </p>

            <div className="mt-6">
              <BulletPoint
                title={`Defining Customer Value`}
                icon={"fi fi-sr-brain-circuit"}
                iconColor="white"
                theme={AppTheme.Light}
              >
                <p className="leading-relaxed ">
                  Figuring out what the customer actually wants is a huge part
                  of software development. AI helps us analyze user behavior and
                  market signals to decide exactly what to build in the first
                  place.
                </p>
              </BulletPoint>
              <BulletPoint
                title={`Establishing the Standard of Excellence`}
                icon={"fi fi-sr-refresh"}
                iconColor="white"
                theme={AppTheme.Light}
              >
                <p className="leading-relaxed">
                  Deciding the definition of “good” is a very important part of
                  our process. We set clear, measurable benchmarks to ensure the
                  final product meets strict business requirements.
                </p>
              </BulletPoint>
              <BulletPoint
                title={`Crafting Delightful Experiences`}
                icon={"fi fi-sr-chat-arrow-grow"}
                iconColor="white"
                theme={AppTheme.Light}
              >
                <p className="leading-relaxed">
                  Making it delightful is our ultimate goal. We can all tell the
                  difference between a piece of software that gets the job done
                  and one that&apos;s actually easy and fun to use. We design AI
                  tools that users love to interact with.
                </p>
              </BulletPoint>
            </div>
          </div>
          <div className="relative z-10 hidden lg:flex lg:justify-start max-w-80 w-6/12 mx-auto">
            <DiagramWrapper>
              <img
                alt="Decision Making"
                className="max-w-full"
                src={imgAutomation}
              />
            </DiagramWrapper>
          </div>
        </div>
      </Section>

      <ProcessSection />

      <Section
        id={AppComponents.usecases}
        bgColor="bg-slate-100"
        style="relative pt-28 md:pt-20 bg-linear-to-b from-brand-violet to-brand-blue"
      >
        <div
          id={AppComponents.documents}
          className="flex flex-wrap pt-20 justify-between items-center text-left text-white"
        >
          <div className="w-full lg:w-6/12 px-4 mb-20">
            <Caption
              message="Use case"
              color="brand-violet"
              bgColor="bg-white/80"
            />
            <Header
              message={`AI Intelligent Document Processing (IDP)`}
              theme={AppTheme.Light}
            />
            <p className="my-4 text-lg leading-relaxed">
              Transform your unstructured data into a powerful business asset.
              Our custom AI tools automatically extract, validate, and structure
              critical information from invoices, contracts, and complex
              documents.
            </p>
            <div className="mt-6">
              <BulletPoint
                title={`Eliminating manual data entry`}
                icon={"fi fi-sr-pen-nib"}
                iconColor="white"
                theme={AppTheme.Light}
              >
                <p className="leading-relaxed ">
                  By eliminating manual data entry, we drastically reduce human
                  error and accelerate processing times from hours to seconds.
                </p>
              </BulletPoint>
              <BulletPoint
                title={`Automating document processing tasks`}
                icon={"fi fi-sr-process"}
                iconColor="white"
                theme={AppTheme.Light}
              >
                <p className="leading-relaxed ">
                  By automating document processing tasks, the solution
                  significantly reduces the need for manual labor, lowering
                  operational costs.
                </p>
              </BulletPoint>
              <BulletPoint
                title={`Focus on high-value tasks`}
                icon={"fi fi-sr-bullseye-arrow"}
                iconColor="white"
                theme={AppTheme.Light}
              >
                <p className="leading-relaxed ">
                  This scalable solution allows your team to focus on high-value
                  tasks while keeping operational costs to a minimum.
                </p>
              </BulletPoint>
            </div>
          </div>

          <div className="hidden lg:block w-6/12 pl-10">
            <div className="relative flex flex-col w-full mb-6">
              <DiagramWrapper>
                <img
                  alt="Document processing diagram"
                  className="max-w-full"
                  src={imgDocuments}
                />
              </DiagramWrapper>
            </div>
          </div>
        </div>

        <div
          id={AppComponents.knowledge}
          className="flex flex-wrap pt-20 mb-20 justify-between items-center text-left text-white"
        >
          <div className="hidden lg:block w-6/12 pr-4">
            <div className="relative flex flex-col w-full mb-6">
              <img
                alt="Knowledge base"
                className="max-w-full rounded-lg"
                src={imgKnowledge}
              />
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4 mb-20">
            <Caption
              message="Use case"
              color="brand-violet"
              bgColor="bg-white/80"
            />
            <Header
              message={`AI-Powered Knowledge Base`}
              theme={AppTheme.Light}
            />
            <p className="mt-4 mb-4 text-lg leading-relaxed">
              Unlock the full potential of your company’s internal intelligence
              with a smart repository. We build centralized knowledge bases
              equipped with advanced semantic search and AI assistants that
              understand natural language. Employees can instantly retrieve
              answers, summarize long reports, or onboard faster without digging
              through messy folders. It ensures that critical corporate insights
              are <b className="tracking-wider">secure</b>, easily accessible,
              and always up to date.
            </p>
            <p className="mt-4 mb-4 text-lg leading-relaxed">
              It goes beyond traditional databases by employing machine learning
              algorithms to improve search capabilities, provide personalized
              recommendations, and continuously learn from user interactions
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
