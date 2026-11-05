import Caption from "../../../components/ui/Caption";
import Header from "../../../components/ui/Header";
import Section from "../../../components/ui/Section";
import { AppComponents, AppTheme } from "../../../utils/common";
import Process from "./Process";

export default function ProcessSection() {
	return (
		<Section
			id={AppComponents.process}
			bgColor="bg-brand-violet"
			style="relative pt-28 md:pt-20"
			size="wide"
		>
			<div className="flex flex-col text-left text-white">
				<div className="flex justify-between items-center">
					<div className="hidden lg:flex lg:w-6/12"></div>
					<div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto px-4">
						<Caption
							message="AI Solutions"
							color="brand-violet"
							bgColor="bg-white/80"
						/>
						<Header message={`AI Development Process`} theme={AppTheme.Light} />
					</div>
				</div>

				<div className="w-10/12 mx-auto">
					<Process />
				</div>
			</div>
		</Section>
	);
}
