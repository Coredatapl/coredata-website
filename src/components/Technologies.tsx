import { AppComponents } from "./App";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Symbol from "./ui/Symbol";

import imgIconNode from "../assets/img/icons/icon-nodejs.svg";
import imgIconJavascript from "../assets/img/icons/icon-javascript.svg";
import imgIconTypescript from "../assets/img/icons/icon-typescript.svg";
import imgIconPython from "../assets/img/icons/icon-python.svg";
import imgIconReact from "../assets/img/icons/icon-react.svg";
import imgIconAngular from "../assets/img/icons/icon-angular.svg";
import imgIconDotnet from "../assets/img/icons/icon-dotnet.svg";
import imgIconMssql from "../assets/img/icons/icon-mssql.svg";

export default function Technologies() {
  return (
    <Section id={AppComponents.technologies} bgColor="bg-slate-100">
      <div className="flex flex-wrap items-center text-left mb-20">
        <div className="hidden lg:block w-6/12 px-4">
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-6/12 px-4">
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="NodeJS"
                className="flex justify-end -mb-4"
              >
                <img src={imgIconNode} alt="NodeJS" />
              </a>
              <div className="flex justify-start mb-4">
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Python"
                >
                  <img src={imgIconPython} alt="Python" />
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Typescript"
                  className="mt-4 -mr-4"
                >
                  <img src={imgIconTypescript} alt="Typescript" />
                </a>
              </div>
              <a
                href="https://angular.io/"
                target="_blank"
                rel="noreferrer"
                aria-label="Angular"
                className="flex justify-end pr-10"
              >
                <img src={imgIconAngular} alt="Angular" />
              </a>
              <a
                href="https://www.microsoft.com/sql-server/"
                target="_blank"
                rel="noreferrer"
                aria-label="MSSQL"
                className="flex justify-end -mr-20"
              >
                <img src={imgIconMssql} alt="MSSQL" />
              </a>
            </div>
            <div className="my-4 w-6/12 px-4 mt-16">
              <a
                href="https://www.javascript.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Javascript"
              >
                <img
                  src={imgIconJavascript}
                  alt="Javascript"
                  className="ml-4"
                />
              </a>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="React"
              >
                <img src={imgIconReact} alt="React" className="w-32" />
              </a>
              <a
                href="https://dotnet.microsoft.com/"
                target="_blank"
                rel="noreferrer"
                aria-label=".NET"
                className="flex mt-4 pl-4"
              >
                <img src={imgIconDotnet} alt=".NET" className="ml-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 lg:px-4">
          <Symbol icon="fi fi-sr-square-code" />
          <Header message="Technologies we use" />
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            We use the latest technologies in our projects. We always care about
            the safety of the solutions we create. It is also important for us
            to control and maintain a high level of quality of our applications.
          </p>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            With Agile development, CI/CD pipelines, DevOps approach, and a
            balanced mix of manual and automated testing
          </p>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            We deliver cost-effective products thanks to the use of ready-made
            components (frameworks, platforms, and services), and public APIs.
          </p>
        </div>
      </div>
    </Section>
  );
}
