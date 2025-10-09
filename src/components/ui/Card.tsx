interface CardProps {
	label: string;
	desc: string;
	icon: string;
}

export default function Card({ label, desc, icon }: CardProps) {
	return (
		<div className="min-h-10 px-10 py-4 text-center rounded-xl bg-slate-200 hover:bg-white hover:cursor-pointer">
			<div className="flex pb-5 justify-center items-center">
				<img src={icon} alt="" />
			</div>
			<h2 className="text-lg">{label}</h2>
			<p className="text-sm">{desc}</p>
		</div>
	);
}
