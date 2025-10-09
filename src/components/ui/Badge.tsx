interface BadgeProps {
	icon: string;
	color?: string;
	bgColor?: string;
}

export default function Badge({
	icon,
	color = "text-brand-violet",
	bgColor = "bg-white",
}: BadgeProps) {
	return (
		<div
			className={`inline-flex w-16 h-16 mb-6 p-3 text-center items-center justify-center shadow-lg rounded-full ${color} ${bgColor}`}
		>
			<i className={`${icon} text-xl inline-block mt-1 align-middle`}></i>
		</div>
	);
}
