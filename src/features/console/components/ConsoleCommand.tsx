interface ConsoleCommandProps {
	name: string;
}

export default function ConsoleCommand({ name }: ConsoleCommandProps) {
	return <span className="w-full font-semibold text-brand-violet">{name}</span>;
}
