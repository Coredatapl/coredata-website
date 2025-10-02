import { AppComponents } from "../utils/common";
import Header, { HeaderTheme } from "./ui/Header";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";

import imgAutomation from "../assets/img/workflow.jpg";
import imgAutomationProcess from "../assets/img/automation-process.png";
import imgDocuments from "../assets/img/documents-flow.png";
import imgKnowledge from "../assets/img/knowledge.jpg";
import Caption from "./ui/Caption";

export default function Ai() {
  return (
    <Section
      id={AppComponents.ai}
      bgColor="bg-slate-100"
      style="relative pt-28 md:pt-20 bg-gradient-to-b from-blue-500 to-indigo-900"
    >
      <Spacer color={"text-slate-100"} fillColor={"fill-blue-500"} />
      <div className="flex flex-wrap justify-between items-center text-left">
        <div className="hidden lg:block w-6/12 px-10">
          <div className="relative flex flex-col w-full mb-6">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={imgAutomation}
            />
          </div>
        </div>

        <div className="w-full lg:w-6/12 px-4 mb-20">
          <Caption
            message="Automation"
            color="coredataViolet"
            bgColor="bg-white/80"
          />
          <Header message={`AI Automation`} theme={HeaderTheme.Light} />
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            We create solutions that allow for the automation of business
            processes using such AI technologies as AI Agents and tools like
            n8n.
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

      <div className="flex flex-wrap justify-between items-center text-left">
        <div className="w-full lg:w-6/12 px-4 mb-20">
          <Caption
            message="Documents"
            color="coredataViolet"
            bgColor="bg-white/80"
          />
          <Header
            message={`AI Documents Processing`}
            theme={HeaderTheme.Light}
          />
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            AI technology automates and enhances document handling, ensuring
            accuracy, speed, and efficiency. From data extraction to intelligent
            document categorization, we streamline your workflow, reduce manual
            errors, and save valuable time.
          </p>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            By automating document processing tasks, the solution significantly
            reduces the need for manual labor, lowering operational costs.
          </p>
        </div>

        <div className="hidden lg:block w-6/12 px-4">
          <div className="relative flex flex-col w-full mb-6">
            <img alt="..." className="max-w-full" src={imgDocuments} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center text-left">
        <div className="hidden lg:block w-5/12 px-4">
          <div className="relative flex flex-col w-full mb-6">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={imgKnowledge}
            />
          </div>
        </div>

        <div className="w-full lg:w-7/12 px-10 mb-20">
          <Caption
            message="Knowledge"
            color="coredataViolet"
            bgColor="bg-white/80"
          />
          <Header
            message={`AI-powered Knowledge Base`}
            theme={HeaderTheme.Light}
          />
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            A knowledge base is a centralized repository of information designed
            to store, organize, and disseminate knowledge about a specific
            subject or domain. It serves as a self-service resource for users to
            find answers to their questions and access relevant information
            quickly and efficiently.
          </p>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
            An AI-powered Knowledge Base uses artificial intelligence to enhance
            its functionality. It goes beyond traditional databases by employing
            machine learning algorithms to improve search capabilities, provide
            personalized recommendations, and continuously learn from user
            interactions
          </p>
        </div>
      </div>
    </Section>
  );
}
