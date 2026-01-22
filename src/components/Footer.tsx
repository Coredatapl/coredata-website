import { Link } from "react-router";
import iconGithub from "../assets/img/icons/icon-github.svg";
import iconLinkedin from "../assets/img/icons/icon-linkedin.svg";
import { AppComponents } from "../utils/common";
import Logo from "./ui/Logo";
import Spacer from "./ui/Spacer";
import NavItem from "./ui/NavItem";

export default function Footer() {
  const year = new Date().getFullYear();
  const regonNumber = 389256815;
  const nipNumber = 7971953479;

  return (
    <footer className="relative flex w-full py-10 pt-20 bg-slate-200">
      <Spacer color={"text-slate-100"} fillColor={"fill-slate-200"} />
      <div className="container flex flex-row w-11/12 lg:w-8/12 py-4 mx-auto justify-between items-start">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <div className="hidden md:flex flex-col xl:pr-10 2xl:pr-20">
              <Logo />
              <h5 className="font-semibold pt-10">Get in touch today!</h5>
              <a href="mailto:hello@coredata.pl">
                <p className="">hello@coredata.pl</p>
              </a>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  className="h-10 w-10 mr-2 p-2 bg-white hover:bg-white/50 shadow-lg hover:shadow-xl font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  href="https://www.linkedin.com/company/coredatapl/"
                  target="_blank"
                  rel="noreferrer"
                  title="Go to our LinkedIn page"
                >
                  <img
                    className="inline-block w-5 mb-1"
                    src={iconLinkedin}
                    alt="In"
                  />
                </a>
                <a
                  className="h-10 w-10 mr-2 p-2 bg-white hover:bg-white/50 shadow-lg hover:shadow-xl font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  href="https://github.com/Coredatapl"
                  target="_blank"
                  rel="noreferrer"
                  title="Go to our Github page"
                >
                  <img
                    className="inline-block w-5 mb-1"
                    src={iconGithub}
                    alt="Gh"
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:flex flex-col min-w-2 lg:min-w-4"></div>
            <div className="hidden lg:flex flex-col min-w-40 xl:pr-10 2xl:pr-20 text-sm xl:text-md">
              <h3 className="font-semibold text-base">Address</h3>
              <p className="mt-0 pt-4">Warsaw</p>
              <p className="mt-0">Masovian district</p>
              <p className="mt-0 mb-2">Poland, PL</p>
              <p className="mt-0">REGON {regonNumber}</p>
              <p className="mt-0 pb-10">NIP {nipNumber}</p>
            </div>
            <div className="flex flex-col min-w-10 md:min-w-20 md:border-l border-solid border-slate-300"></div>
            <div className="flex flex-col min-w-28 md:min-w-40">
              <h3 className="font-semibold">Info</h3>
              <NavItem
                path={"/"}
                hash={AppComponents.about}
                label="About"
                className="pt-4 text-sm font-normal"
              />
              <NavItem
                path={"/"}
                hash={AppComponents.consultations}
                label="Solutions"
                className="pt-2 text-sm font-normal"
              />
              <NavItem
                path={"/"}
                hash={AppComponents.ai}
                label="Automation"
                className="pt-2 text-sm font-normal"
              />
              <NavItem
                path={"/"}
                hash={AppComponents.technologies}
                label="Technologies"
                className="pt-2 text-sm font-normal"
              />
            </div>
            <div className="flex flex-col min-w-28 md:min-w-40">
              <h3 className="font-semibold">Company</h3>
              <NavItem
                path={"/privacy"}
                label="Privacy Policy"
                className="pt-4 text-sm font-normal"
              />
              <NavItem
                path={"/"}
                hash={AppComponents.contact}
                label="Contact"
                className="pt-2 text-sm font-normal"
              />
            </div>
            <div className="flex flex-col min-w-20 md:min-w-40">
              <h3 className="font-semibold">Other</h3>
              <NavItem
                path={"/terms"}
                label="Terms & Conditions"
                className="pt-4 text-sm font-normal"
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-center md:justify-start">
            <p className="pt-10 text-xs">
              <Link to={"https://coredata.pl/"}>
                <b>Coredata</b>
              </Link>{" "}
              &copy; {year}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
