import imgDatacenter from "../assets/img/datacenter.webp";
import imgIconAngular from "../assets/img/icons/icon-angular.svg";
import imgIconDotnet from "../assets/img/icons/icon-dotnet.svg";
import imgIconJavascript from "../assets/img/icons/icon-javascript.svg";
import imgIconN8n from "../assets/img/icons/icon-n8n.svg";
import imgIconNode from "../assets/img/icons/icon-nodejs.svg";
import imgIconOpenai from "../assets/img/icons/icon-openai.svg";
import imgIconPython from "../assets/img/icons/icon-python.svg";
import imgIconReact from "../assets/img/icons/icon-react.svg";
import imgIconSupabase from "../assets/img/icons/icon-supabase.svg";
import imgIconTypescript from "../assets/img/icons/icon-typescript.svg";
import imgLogoAikido from "../assets/img/logos/aikido.webp";
import imgLogoCert from "../assets/img/logos/cert.webp";
import imgLogoGithubCopilot from "../assets/img/logos/github-copilot.webp";
import imgLogoOwasp from "../assets/img/logos/owasp.webp";
import imgLogoQlty from "../assets/img/logos/qlty.webp";
import imgLogoSentry from "../assets/img/logos/sentry.webp";
import imgLogoSnyk from "../assets/img/logos/snyk.webp";
import imgLogoSonar from "../assets/img/logos/sonar.webp";
import Console from "../features/console/components/Console";
import ConsoleCommand from "../features/console/components/ConsoleCommand";
import ConsoleOutput from "../features/console/components/ConsoleOutput";
import { AppComponents } from "../utils/common";
import BulletPoint from "./ui/BulletPoint";
import Caption from "./ui/Caption";
import Header from "./ui/Header";
import NavItem from "./ui/NavItem";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";

export default function Technologies() {
	return (
		<Section
			id={AppComponents.technologies}
			bgColor="bg-slate-100"
			style="relative"
		>
			<Spacer color={"text-slate-100"} fillColor={"fill-slate-100"} />
			<div className="relative flex flex-wrap items-center text-left mb-20">
				<div className="relative hidden lg:block z-10 w-6/12">
					<div className="justify-center flex flex-wrap relative">
						<div className="my-4 w-6/12">
							<a
								href="https://nodejs.org/"
								target="_blank"
								rel="noreferrer"
								aria-label="NodeJS"
								title="NodeJS"
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
									title="Python"
								>
									<img src={imgIconPython} alt="Python" />
								</a>
								<a
									href="https://www.typescriptlang.org/"
									target="_blank"
									rel="noreferrer"
									aria-label="Typescript"
									title="Typescript"
									className="mt-4 -mr-4"
								>
									<img src={imgIconTypescript} alt="Typescript" />
								</a>
							</div>
							<div className="flex justify-start mb-4">
								<a
									href="https://angular.io/"
									target="_blank"
									rel="noreferrer"
									aria-label="Angular"
									title="Angular"
									className="mr-4"
								>
									<img
										src={imgIconAngular}
										alt="Angular"
										className="w-28 mr-4"
									/>
								</a>
								<a
									href="https://supabase.com/"
									target="_blank"
									rel="noreferrer"
									aria-label="Supabase"
									title="Supabase"
									className="mt-4 ml-4"
								>
									<img src={imgIconSupabase} alt="Supabase" className="w-40" />
								</a>
							</div>
							<div className="flex justify-start mb-4">
								<a
									href="https://n8n.io/"
									target="_blank"
									rel="noreferrer"
									aria-label="n8n"
									title="n8n"
								>
									<img src={imgIconN8n} alt="n8n" className="w-24 ml-10" />
								</a>
								<a
									href="https://openai.com/"
									target="_blank"
									rel="noreferrer"
									aria-label="OpenAI"
									title="OpenAI"
									className="flex justify-end -mr-20"
								>
									<img
										src={imgIconOpenai}
										alt="OpenAI"
										className="w-36 ml-10"
									/>
								</a>
							</div>
						</div>
						<div className="my-4 w-6/12 px-4 mt-16">
							<a
								href="https://www.javascript.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="Javascript"
								title="Javascript"
							>
								<img
									src={imgIconJavascript}
									alt="Javascript"
									className="ml-4 w-24"
								/>
							</a>
							<a
								href="https://reactjs.org/"
								target="_blank"
								rel="noreferrer"
								aria-label="React"
								title="React"
								className="mt-4"
							>
								<img
									src={imgIconReact}
									alt="React"
									className="w-32 ml-2 mt-6"
								/>
							</a>
							<a
								href="https://dotnet.microsoft.com/"
								target="_blank"
								rel="noreferrer"
								aria-label=".NET"
								title=".NET"
								className="flex mt-4 pl-4"
							>
								<img
									src={imgIconDotnet}
									alt=".NET"
									className="w-28 ml-4 mt-6"
								/>
							</a>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-6/12 lg:px-4">
					<Caption message="Technology" />
					<Header message="Technology stack" />
					<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
						We build our solutions using only the latest, most reliable
						technologies available on the market. Maintaining the highest
						standards of software quality and performance is always our absolute
						priority.
					</p>
					<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
						To ensure flawless delivery, we combine rigorous manual and
						automated testing with robust CI/CD pipelines for seamless
						deployment.
					</p>
					<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
						Operating strictly within the Agile methodology, we remain highly
						adaptable to your evolving needs while maintaining complete
						transparency at every stage of development.
					</p>
				</div>
			</div>

			<div className="w-full px-4 text-left">
				<Caption message="Technology" />
				<Header message="Security & Quality Tools" />
				<div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-px mb-40 overflow-hidden rounded-2xl border border-gray-200 bg-slate-200 shadow-2xl">
					<div className="flex flex-col h-full p-4 bg-white hover:bg-slate-200 transition-colors duration-300">
						<div className="flex mb-2">
							<img alt="OWASP" className="max-h-[2rem]" src={imgLogoOwasp} />
						</div>
						<div className="mb-2 font-semibold">OWASP</div>
						<div className="mb-2 text-sm text-slate-600 sm:grow">
							A global non-profit organization that improves software security
							through community-led open-source projects, tools, and educational
							resources.
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
							<img alt="Sentry" className="max-h-[2rem]" src={imgLogoSentry} />
						</div>
						<div className="font-semibold">Sentry</div>
						<div className="text-sm text-slate-600 sm:grow">
							An open-source error tracking and performance monitoring platform
							that helps developers diagnose, fix, and optimize code in real
							time.
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
							A developer-first security platform designed to find and
							automatically fix vulnerabilities in open-source dependencies,
							container images, and infrastructure as code.
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
							An automatic code review tool that detects bugs, vulnerabilities,
							and code smell in source code and ensures code quality.
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
						<div className="font-semibold">Aikido Security</div>
						<div className="text-sm text-slate-600 sm:grow">
							An security platform that consolidates multiple scanning features
							like SAST, DAST, and dependency checks.
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
							A development platform focused on improving code quality, testing
							efficiency, and engineering velocity through automated workflows.
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
							An AI assistant that scans code for security vulnerabilities in
							real time and blocks insecure coding patterns before they are
							committed.
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
							The Polish national computer emergency response team responsible
							for monitoring, analyzing, and mitigating cybersecurity threats
							across the country.
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

			<div
				id={AppComponents.security}
				className="relative flex flex-wrap pt-20 items-center mb-40 text-left"
			>
				<div className="w-full lg:w-6/12 lg:px-4">
					<Caption message="Technology" />
					<Header message="Security" />
					<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
						At <b>Coredata</b>, the security of your data and digital assets is
						our absolute priority. We enforce strict data isolation protocols to
						keep sensitive information completely separated and secure.
					</p>
					<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
						For maximum privacy, we can fully deploy and run AI models locally
						within your own dedicated infrastructure, ensuring your company data
						never leaves your environment or leaks into public training
						datasets.
					</p>
					<div className="mt-6">
						<BulletPoint
							title={`CI/CD Code Scanning & Quality Tools`}
							icon={"fi fi-sr-shield-check"}
						>
							<p className="leading-relaxed">
								Integrating automated vulnerability scans and rigorous code
								quality checks directly into our deployment pipelines to
								eliminate security risks before they hit production.
							</p>
						</BulletPoint>
						<BulletPoint
							title={`Safe AI Data Processing`}
							icon={"fi fi-sr-brain-circuit"}
						>
							<p className="leading-relaxed">
								Integrating automated vulnerability scans and rigorous code
								quality checks directly into our deployment pipelines to
								eliminate security risks before they hit production.
							</p>
						</BulletPoint>
						<BulletPoint
							title={`Resilient Cloud Disaster Recovery`}
							icon={"fi fi-sr-globe-shield"}
						>
							<p className="leading-relaxed">
								Implementing multi-layered cloud security frameworks, continuous
								backups, and robust failover solutions to strictly prevent data
								loss and ensure maximum business continuity.
							</p>
						</BulletPoint>
					</div>
				</div>
				<div className="relative hidden lg:block w-6/12">
					<div className="absolute right-0 -top-60 z-0 w-8/12">
						<img
							alt="White board with consulting sketches"
							className="w-full max-w-full rounded-4xl shadow-2xl shadow-slate-500"
							src={imgDatacenter}
						/>
					</div>
					<div className="absolute left-10 top-0 z-10">
						<Console live={true}>
							<ConsoleCommand name="run tests" />
							<ConsoleOutput success={true} result="all good">
								running unit tests
							</ConsoleOutput>
							<ConsoleOutput success={true} result="all good">
								running integration tests
							</ConsoleOutput>
							<ConsoleOutput success={true} result="all good">
								running penetration tests
							</ConsoleOutput>
							<div className="w-full"></div>
							<ConsoleOutput
								success={true}
								result="all checks completed, system is secure"
							></ConsoleOutput>
						</Console>
					</div>
				</div>
			</div>
		</Section>
	);
}
