interface ButtonProps {
	label: string;
	type?: "button" | "submit" | "reset";
	icon?: string;
	onClick?: () => void;
}

export default function Button({ label, type, icon, onClick }: ButtonProps) {
	return (
		<button
			className="mr-1 px-5 py-3 text-sm bg-brand-violet text-white font-semibold tracking-widest rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-xl hover:scale-105 active:bg-indigo-700 active:scale-95"
			onClick={onClick}
			type={type}
		>
			{label}{" "}
			{icon ? (
				<i className={`${icon} inline-block align-middle my-auto mt-1`}></i>
			) : null}
		</button>
	);
}
