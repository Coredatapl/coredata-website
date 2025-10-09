import { Link } from "react-router";
import iconGithub from "../assets/img/icons/icon-github.svg";
import iconLinkedin from "../assets/img/icons/icon-linkedin.svg";
import { useUi } from "../hooks/useUi";
import { AppComponents } from "../utils/common";
import Logo from "./ui/Logo";
import Spacer from "./ui/Spacer";

export default function Footer() {
	const { scrollTo } = useUi();
	const year = new Date().getFullYear();

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
							<p className="mt-0 pt-10">Wilanów, Warsaw</p>
							<p className="mt-0">Masovian district</p>
							<p className="mt-0 mb-2">Poland, PL</p>
							<p className="mt-0">REGON 389256815</p>
							<p className="mt-0 pb-10">NIP 7971953479</p>
						</div>
						<div className="flex flex-col min-w-10 md:min-w-20 md:border-l border-solid border-slate-300"></div>
						<div className="flex flex-col min-w-28 md:min-w-40">
							<h3 className="font-semibold">Info</h3>
							<Link
								to={"/"}
								onClick={() => scrollTo(AppComponents.about)}
								className="pt-4 text-sm font-normal"
							>
								About
							</Link>
							<Link
								to={"/"}
								onClick={() => scrollTo(AppComponents.consultations)}
								className="pt-2 text-sm font-normal"
							>
								Solutions
							</Link>
							<Link
								to={"/"}
								onClick={() => scrollTo(AppComponents.ai)}
								className="pt-2 text-sm font-normal"
							>
								Automation
							</Link>
							<Link
								to={"/"}
								onClick={() => scrollTo(AppComponents.technologies)}
								className="pt-2 text-sm font-normal"
							>
								Technologies
							</Link>
						</div>
						<div className="flex flex-col min-w-28 md:min-w-40">
							<h3 className="font-semibold">Company</h3>
							<Link to={"/privacy"} className="pt-4 text-sm font-normal">
								Privacy Policy
							</Link>
							<Link
								to={"/"}
								onClick={() => scrollTo(AppComponents.contact)}
								className="pt-2 text-sm font-normal"
							>
								Contact
							</Link>
						</div>
						<div className="flex flex-col min-w-20 md:min-w-40">
							<h3 className="font-semibold">Other</h3>
							<Link to={"/terms"} className="pt-4 text-sm font-normal">
								Terms & Conditions
							</Link>
						</div>
					</div>
					<div className="flex flex-row w-full justify-center md:justify-start">
						<p className="pt-10 text-xs">
							<Link to={"https://coredata.pl/"} className="font-bold">
								Coredata
							</Link>{" "}
							&copy; {year}. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
