import imgLogoAikido from "../assets/img/logos/aikido.webp";
import imgLogoGithubCopilot from "../assets/img/logos/github-copilot.webp";
import imgLogoOwasp from "../assets/img/logos/owasp.webp";
import imgLogoSentry from "../assets/img/logos/sentry.webp";
import imgLogoSnyk from "../assets/img/logos/snyk.webp";
import imgLogoSonar from "../assets/img/logos/sonar.webp";
import imgLogoQlty from "../assets/img/logos/qlty.webp";
import imgLogoCert from "../assets/img/logos/cert.webp";
import { AppComponents } from "../utils/common";
import Caption from "./ui/Caption";
import Header from "./ui/Header";
import Section from "./ui/Section";
import NavItem from "./ui/NavItem";

export default function Tools() {
  return (
    <>
      <Section id={AppComponents.tools} bgColor="bg-slate-100" style="relative">
        <div className="w-full px-4 text-left">
          <Caption message="Tools" />
          <Header message="Code Scanning & Quality Tools" />
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-px mb-20 overflow-hidden rounded-2xl border border-gray-200 bg-slate-200 shadow-xl">
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img alt="OWASP" className="max-h-[2rem]" src={imgLogoOwasp} />
              </div>
              <div className="mb-2 font-semibold">OWASP</div>
              <div className="mb-2 text-sm text-slate-600 sm:grow">
                OWASP short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://owasp.org"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img
                  alt="Sentry"
                  className="max-h-[2rem]"
                  src={imgLogoSentry}
                />
              </div>
              <div className="font-semibold">Sentry</div>
              <div className="text-sm text-slate-600 sm:grow">
                Tool short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://sentry.io"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img alt="Snyk" className="max-h-[2rem]" src={imgLogoSnyk} />
              </div>
              <div className="font-semibold">Snyk</div>
              <div className="text-sm text-slate-600 sm:grow">
                Tool short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://snyk.io"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img
                  alt="SonarQube"
                  className="max-h-[2rem]"
                  src={imgLogoSonar}
                />
              </div>
              <div className="font-semibold">SonarQube</div>
              <div className="text-sm text-slate-600 sm:grow">
                Tool short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://www.sonarsource.com/products/sonarqube/"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img
                  alt="Aikido"
                  className="max-h-[1.6rem]"
                  src={imgLogoAikido}
                />
              </div>
              <div className="font-semibold">Aikido</div>
              <div className="text-sm text-slate-600 sm:grow">
                Tool short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://www.aikido.dev"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img alt="Qlty" className="max-h-[1.6rem]" src={imgLogoQlty} />
              </div>
              <div className="font-semibold">Qlty</div>
              <div className="text-sm text-slate-600 sm:grow">
                Tool short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://qlty.sh"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img
                  alt="GitHub Copilot"
                  className="max-h-[1.6rem]"
                  src={imgLogoGithubCopilot}
                />
              </div>
              <div className="font-semibold">GitHub Copilot</div>
              <div className="text-sm text-slate-600 sm:grow">
                Tool short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://github.com/features/copilot"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
            <div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
              <div className="flex mb-2">
                <img alt="CERT" className="max-h-[1.6rem]" src={imgLogoCert} />
              </div>
              <div className="font-semibold">CERT</div>
              <div className="text-sm text-slate-600 sm:grow">
                Tool short description and key features. Tool short description
                and key features.
              </div>
              <div className="mt-2">
                <NavItem
                  path={"https://cert.pl"}
                  label="Learn more"
                  icon="fi-sr-arrow-right"
                  className="block transition-colors transition-discrete duration-300 ease-in-out hover:text-brand-blue"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
