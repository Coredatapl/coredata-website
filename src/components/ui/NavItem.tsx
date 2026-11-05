import { Link } from "react-router";
import { useUi } from "../../hooks/useUi";

interface NavItemProps {
	path: string;
	label: string;
	hash?: string;
	className?: string;
	icon?: string;
}

export default function NavItem({
	hash,
	path,
	label,
	className,
	icon,
}: NavItemProps) {
	const { scrollTo } = useUi();

	function getTo() {
		if (hash) {
			return {
				pathname: path,
				hash,
			};
		}
		return path;
	}

	function renderIcon() {
		if (!icon) return null;
		return (
			<i
				className={`fi ${icon} inline-block align-middle my-auto mt-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out`}
			></i>
		);
	}

	function handleClick() {
		if (path === "/" && hash) {
			scrollTo(hash);
		}
	}

	return (
		<Link
			to={getTo()}
			onClick={() => handleClick()}
			className={`group ${className}`}
			target={path !== "/" ? "_blank" : undefined}
		>
			{label} {renderIcon()}
		</Link>
	);
}
