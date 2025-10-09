import { AppTheme } from "../../utils/common";

interface HeaderProps {
	message: string;
	theme?: string;
}

export default function Header({
	message,
	theme = AppTheme.Dark,
}: HeaderProps) {
	function getTheme() {
		switch (theme) {
			case AppTheme.Light:
				return "text-white shadow-gray-600";
			case AppTheme.Color:
				return "text-brand-blue shadow-gray-100";
			case AppTheme.Dark:
			default:
				return "shadow-gray-200";
		}
	}

	return (
		<h2
			className={`w-full mb-6 text-2xl font-semibold text-shadow-xs tracking-wide ${getTheme()}`}
		>
			{message}
		</h2>
	);
}
