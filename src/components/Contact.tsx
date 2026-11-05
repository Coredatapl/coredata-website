import { sendEmail } from "../utils/api/api.service";
import {
	AppComponents,
	AppTheme,
	FormFieldType,
	HtmlElementType,
} from "../utils/common";
import Form, { FormField, SubmitResult } from "./ui/Form";
import Header from "./ui/Header";
import Section from "./ui/Section";
import SubHeader from "./ui/SubHeader";

export default function Contact() {
	const fields: FormField[] = [
		{
			field: FormFieldType.INPUT,
			name: "contactName",
			placeholder: "Name",
			type: HtmlElementType.TEXT,
			required: true,
			minLength: 3,
		},
		{
			field: FormFieldType.INPUT,
			name: "contactEmail",
			placeholder: "Email",
			type: HtmlElementType.EMAIL,
			required: true,
			minLength: 5,
		},
		{
			field: FormFieldType.INPUT,
			name: "contactSubject",
			placeholder: "Subject",
			type: HtmlElementType.TEXT,
			required: true,
			minLength: 3,
		},
		{
			field: FormFieldType.TEXTAREA,
			name: "contactMessage",
			placeholder: "Message",
			type: HtmlElementType.TEXT,
			required: true,
		},
	];

	async function handleSubmit(data: FormData) {
		const name = data.get("contactName");
		const email = data.get("contactEmail");
		const subject = data.get("contactSubject");
		const message = data.get("contactMessage");

		if (
			typeof name !== "string" ||
			typeof email !== "string" ||
			typeof subject !== "string" ||
			typeof message !== "string"
		) {
			return {
				type: "error",
				message: "Form data is invalid",
			} as SubmitResult;
		}
		if (name.length < 3 || email.length < 5 || message.length === 0) {
			return {
				type: "error",
				message: "Form data is too short",
			} as SubmitResult;
		}

		const response = await sendEmail(name, email, subject, message);

		if (!response.success) {
			return {
				type: "error",
				message: `Form submission error. ${response.result}.`,
			} as SubmitResult;
		}
		return {
			type: "success",
			message: "Form submitted successfully. Thank you!",
		} as SubmitResult;
	}

	return (
		<Section id={AppComponents.contact} bgColor="bg-slate-100" style="relative">
			<div className="relative flex flex-wrap -mb-10 z-10 justify-center text-left bg-white shadow-2xl shadow-slate-500 rounded-2xl overflow-hidden">
				<div className="relative z-0 hidden lg:flex flex-col w-1/2 xl:w-2/3 px-6 md:px-8 py-4 lg:py-8 bg-brand-violet text-white color-background">
					<Header
						message="Let’s Build Something Great Together"
						theme={AppTheme.Light}
					/>
					<div className="mb-4">
						<p className="leading-relaxed mb-4">
							If you are ready to elevate your business with tailored AI and
							software solutions, we invite you to get in touch. Use the contact
							form or reach out directly via email to share your vision and
							business challenges.
						</p>
						<p className="leading-relaxed mb-4">
							For more updates on our work and industry insights, feel free to
							connect with us on LinkedIn.
						</p>
					</div>
					<div className="flex flex-col text-lg text-white">
						<div className="flex flex-row items-center xl:gap-10 mb-4">
							<div className="flex flex-row lg:min-w-60 items-center">
								<span className="-mb-1">
									<i className={`fi fi-sr-at`}></i>
								</span>
								<h4 className="pl-2 tracking-wide">
									<a
										href="mailto:hello@coredata.pl"
										className="hover:text-slate-300"
									>
										hello@coredata.pl
									</a>
								</h4>
							</div>
							<div className="flex flex-row items-center">
								<span className="-mb-1">
									<i className={`fi fi-sr-document-link`}></i>
								</span>
								<h4 className="pl-2 tracking-wide">
									<a
										href="https://www.linkedin.com/company/coredatapl/"
										target="_blank"
										rel="noreferrer"
										title="Go to our LinkedIn page"
										className="hover:text-slate-300"
									>
										LinkedIn
									</a>
								</h4>
							</div>
						</div>
						<div className="flex flex-row items-center xl:gap-10">
							<div className="flex flex-row lg:min-w-60 items-center">
								<span className="-mb-1">
									<i className={`fi fi-sr-address-book`}></i>
								</span>
								<h4 className="pl-2 tracking-wide">Warsaw, Poland</h4>
							</div>
							<div className="flex flex-row items-center">
								<span className="-mb-1">
									<i className={`fi fi-sr-square-code`}></i>
								</span>
								<h4 className="pl-2 tracking-wide">
									<a
										href="https://github.com/Coredatapl"
										target="_blank"
										rel="noreferrer"
										title="Go to our Github page"
										className="hover:text-slate-300"
									>
										Github
									</a>
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="relative z-10 flex flex-col w-full lg:w-1/2 xl:w-1/3 px-6 md:px-8 py-4 lg:py-8">
					<div className="flex lg:hidden flex-col">
						<SubHeader message="Get in Touch with Our Experts" />
						<p className="leading-relaxed mb-4">
							Use the contact form below or reach out directly via email.
						</p>
					</div>
					<Form
						fields={fields}
						onSubmit={handleSubmit}
						submitLabel="Send message"
					/>
				</div>
			</div>

			<div className="absolute -bottom-10 right-0 -z-0 w-full overflow-hidden opacity-50">
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
