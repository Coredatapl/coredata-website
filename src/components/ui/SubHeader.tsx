interface SubHeaderProps {
	message: string;
	color?: string;
}

export default function SubHeader({ message, color = "" }: SubHeaderProps) {
	return (
		<h3
			className={`w-full mb-2 text-xl font-semibold text-shadow-xs${color ? ` ${color}` : ""}`}
		>
			{message}
		</h3>
	);
}
