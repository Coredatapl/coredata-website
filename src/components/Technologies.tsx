import { AppComponents } from "../utils/common";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Caption from "./ui/Caption";

import imgIconNode from "../assets/img/icons/icon-nodejs.svg";
import imgIconJavascript from "../assets/img/icons/icon-javascript.svg";
import imgIconTypescript from "../assets/img/icons/icon-typescript.svg";
import imgIconPython from "../assets/img/icons/icon-python.svg";
import imgIconReact from "../assets/img/icons/icon-react.svg";
import imgIconAngular from "../assets/img/icons/icon-angular.svg";
import imgIconDotnet from "../assets/img/icons/icon-dotnet.svg";
import imgIconOpenai from "../assets/img/icons/icon-openai.svg";
import imgIconN8n from "../assets/img/icons/icon-n8n.svg";

export default function Technologies() {
  return (
    <Section
      id={AppComponents.technologies}
      bgColor="bg-slate-100"
      style="relative"
    >
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
                className="flex justify-end"
              >
                <img src={imgIconAngular} alt="Angular" />
              </a>
              <div className="flex justify-start mb-4">
                <a
                  href="https://n8n.io/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="n8n"
                >
                  <img src={imgIconN8n} alt="n8n" className="w-28" />
                </a>
                <a
                  href="https://openai.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="OpenAI"
                  className="flex justify-end -mr-20"
                >
                  <img src={imgIconOpenai} alt="OpenAI" className="w-48" />
                </a>
              </div>
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
          <Caption message="Technology" />
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

      <div className="absolute -bottom-96 right-0 -z-0 w-full overflow-hidden opacity-50">
        <svg
          width="1980"
          height="1024"
          viewBox="0 0 2080 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="1"
            d="M0 1041.36C249.126 1041.36 719.224 1028.66 1382.03 776.716C2094.01 506.11 2453.81 453.126 2891 454.306C3328.19 453.126 3687.99 506.11 4399.97 776.716C5062.78 1028.66 5532.87 1041.36 5782 1041.36M0 1041.92C437.187 1040.74 796.988 1093.72 1508.97 1364.33C2171.78 1616.27 2641.87 1628.97 2891 1628.97C3140.13 1628.97 3610.22 1616.27 4273.03 1364.33C4985.01 1093.72 5344.81 1040.74 5782 1041.92M0 965.08C249.126 965.08 719.224 952.378 1382.03 700.438C2094.01 429.832 2453.81 376.848 2891 378.028C3328.19 376.848 3687.99 429.832 4399.97 700.438C5062.78 952.378 5532.87 965.08 5782 965.08M0 965.671C437.187 964.491 796.988 1017.48 1508.97 1288.08C2171.78 1540.02 2641.87 1552.72 2891 1552.72C3140.13 1552.72 3610.22 1540.02 4273.03 1288.08C4985.01 1017.48 5344.81 964.491 5782 965.671M0 892.281C249.126 892.281 719.224 879.579 1382.03 627.639C2094.01 357.033 2453.81 304.049 2891 305.229C3328.19 304.049 3687.99 357.033 4399.97 627.639C5062.78 879.579 5532.87 892.281 5782 892.281M0 892.84C437.187 891.66 796.988 944.644 1508.97 1215.25C2171.78 1467.19 2641.87 1479.89 2891 1479.89C3140.13 1479.89 3610.22 1467.19 4273.03 1215.25C4985.01 944.644 5344.81 891.66 5782 892.84M0 816.873C249.126 816.873 719.224 804.171 1382.03 552.231C2094.01 281.626 2453.81 228.641 2891 229.821C3328.19 228.641 3687.99 281.626 4399.97 552.231C5062.78 804.171 5532.87 816.873 5782 816.873M0 817.464C437.187 816.283 796.988 869.268 1508.97 1139.87C2171.78 1391.81 2641.87 1404.52 2891 1404.52C3140.13 1404.52 3610.22 1391.81 4273.03 1139.87C4985.01 869.268 5344.81 816.283 5782 817.464M0 741.465C249.126 741.465 719.224 728.763 1382.03 476.823C2094.01 206.217 2453.81 153.233 2891 154.413C3328.19 153.233 3687.99 206.217 4399.97 476.823C5062.78 728.763 5532.87 741.465 5782 741.465M0 742.056C437.187 740.875 796.988 793.86 1508.97 1064.47C2171.78 1316.4 2641.87 1329.11 2891 1329.11C3140.13 1329.11 3610.22 1316.4 4273.03 1064.47C4985.01 793.86 5344.81 740.875 5782 742.056M0 666.057C249.126 666.057 719.224 653.355 1382.03 401.415C2094.01 130.809 2453.81 77.825 2891 79.0052C3328.19 77.825 3687.99 130.809 4399.97 401.415C5062.78 653.355 5532.87 666.057 5782 666.057M0 666.648C437.187 665.467 796.988 718.452 1508.97 989.057C2171.78 1241 2641.87 1253.7 2891 1253.7C3140.13 1253.7 3610.22 1241 4273.03 989.057C4985.01 718.452 5344.81 665.467 5782 666.648M0 588.04C249.126 588.04 719.224 575.338 1382.03 323.398C2094.01 52.7925 2453.81 -0.191873 2891 0.988318C3328.19 -0.191873 3687.99 52.7925 4399.97 323.398C5062.78 575.338 5532.87 588.04 5782 588.04M0 588.631C437.187 587.451 796.988 640.435 1508.97 911.04C2171.78 1162.98 2641.87 1175.68 2891 1175.68C3140.13 1175.68 3610.22 1162.98 4273.03 911.04C4985.01 640.435 5344.81 587.451 5782 588.631"
            stroke="url(#gradient)"
            strokeOpacity="0.5"
            strokeMiterlimit="10"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="-1477.49"
              y1="-270.541"
              x2="-1544.89"
              y2="2461.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D1D1FF" />
              <stop offset="0.299723" stopColor="#4f46e5" />
              <stop offset="0.583885" stopColor="#3d91fc" />
              <stop offset="1" stopColor="#3725FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
}
