interface ButtonProps {
	label: string;
	type: "button" | "submit" | "reset";
	icon?: string;
	onClick?: () => void;
}

export default function Button({ label, type, icon, onClick }: ButtonProps) {
	return (
		<button
			className="group mr-1 px-5 py-3 text-sm bg-brand-violet text-white tracking-widest rounded-xl shadow-lg shadow-neutral-300 cursor-pointer transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-xl hover:shadow-brand-violet/50 hover:-translate-y-1 active:bg-indigo-700 active:translate-y-0"
			onClick={onClick}
			type={type}
		>
			{label}{" "}
			{icon ? (
				<i
					className={`${icon} inline-block align-middle my-auto mt-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out`}
				></i>
			) : null}
		</button>
	);
}
