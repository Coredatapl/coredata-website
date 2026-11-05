import imgApps from "../assets/img/coding.webp";
import imgLinesBg from "../assets/img/lines3.svg";
import { AppComponents } from "../utils/common";
import Caption from "./ui/Caption";
import Header from "./ui/Header";
import Section from "./ui/Section";
import SubHeader from "./ui/SubHeader";

export default function Apps() {
	return (
		<Section
			id={AppComponents.apps}
			bgColor="bg-slate-200"
			style="relative pb-20"
		>
			<div className="items-center flex flex-wrap pb-30 justify-between">
				<div className="relative z-10 w-full lg:w-6/12 lg:pr-10">
					<div className="ustify-start items-start text-left">
						<Caption message="Our solutions" />
						<Header message={`Intelligent Solutions for Modern Business`} />
						<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
							We build web apps for efficient management of different business
							activities. We apply smart automation to streamline workflows and
							integrate corporate systems together for coherent operation.
						</p>
						<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
							We build tools and applications that increase productivity and
							simplify business processes.
						</p>
						<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
							We&apos;re focused on delivering you the solutions and results
							that make your organisation fit for the future.
						</p>
					</div>

					<div className="flex flex-wrap py-10 justify-start items-start text-left">
						<div className="w-full md:w-6/12 pr-5">
							<div className="relative flex flex-col">
								<div className="py-5 flex-auto">
									<SubHeader message={`Web Apps`} />
									<p className="text-blueGray-500">
										Building scalable, secure, and robust web platforms powered
										by intelligent backends to solve your unique business
										challenges.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-6/12 pr-5">
							<div className="relative flex flex-col min-w-0">
								<div className="py-5 flex-auto">
									<SubHeader message={`Mobile Apps`} />
									<p className="text-blueGray-500">
										Designing intuitive iOS and Android apps that deliver
										seamless user experiences and keep your business connected
										on the go.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-6/12 pr-5">
							<div className="relative flex flex-col">
								<div className="py-5 flex-auto">
									<SubHeader message={`Automation`} />
									<p className="text-blueGray-500">
										Eliminating repetitive tasks and orchestrating complex
										workflows to drastically reduce operational costs and human
										error.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-6/12 pr-5">
							<div className="relative flex flex-col min-w-0">
								<div className="py-5 flex-auto">
									<SubHeader message={`Productivity Tools`} />
									<p className="text-blueGray-500">
										Developing custom internal software and AI assistants
										tailored specifically to optimize your team&apos;s time and
										accelerate growth.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative z-10 hidden lg:block max-w-450-px w-6/12 -mb-52 rounded-4xl shadow-2xl">
					<img
						alt="Developer at work creating web applications"
						className="max-w-full rounded-4xl shadow-2xl"
						src={imgApps}
					/>
				</div>
			</div>
			<div className="absolute -bottom-52 right-0 -z-0 w-full overflow-hidden opacity-50">
				<img src={imgLinesBg} alt="lines background" />
			</div>
		</Section>
	);
}
