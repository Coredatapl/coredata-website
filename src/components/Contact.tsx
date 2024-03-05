import { AppComponents } from "./App";
import Section from "./ui/Section";

export default function Contact() {
  return (
    <Section id={AppComponents.contact} bgColor="bg-slate-100">
      <div className="relative flex flex-wrap -mb-10 py-4 lg:py-16 z-10 justify-center bg-white shadow-xl rounded-lg">
        <div className="w-full px-2 md:px-4 text-center">
          <h2 className="font-semibold text-3xl text-shadow shadow-gray-300">
            That&apos;s about it!
          </h2>
          <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            If you want to cooperate with us, please contact us, send an e-mail
            and describe what we can help you with. You have all the contact
            information below. Feel free to check out our{" "}
            <a
              className="text-blueGray-700 hover:text-coredataViolet"
              href="https://www.linkedin.com/company/coredatapl/"
              target="_blank"
              rel="noreferrer"
              title="Go to our LinkedIn page"
            >
              LinkedIn
            </a>{" "}
            page.
          </p>
          <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            We are already looking forward to working together{" "}
            <i className="fa-regular fa-face-smile-wink"></i>
          </p>
          <div className="flex flex-col md:block mt-10">
            <a
              href="mailto:hello@coredata.pl"
              target="_blank"
              rel="noreferrer"
              className="md:px-6 py-4 text-sm text-white hover:text-white font-bold rounded-xl outline-none focus:outline-none bg-coredataViolet hover:bg-indigo-600 active:bg-indigo-600 shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Email Us
              <i className="fi fi-sr-paper-plane inline-block ml-2 align-middle"></i>
            </a>
          </div>
          <div className="text-center mt-4 lg:mt-16"></div>
        </div>
      </div>
    </Section>
  );
}
