import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useUi } from "../../hooks/useUi";
import { useUtil } from "../../hooks/useUtil";
import { AppComponents } from "../../utils/common";
import MobileNav from "./MobileNav";

interface TopNavProps {
	showNav?: boolean;
}

export default function TopNav({ showNav = true }: TopNavProps) {
	const { scrollTo } = useUi();
	const { targetInside } = useUtil();
	const [navOpen, setNavOpen] = useState(false);
	const topNavRef = useRef<HTMLDivElement>(null);
	const topNavButtonRef = useRef<HTMLButtonElement>(null);

	function handleScroll() {
		setNavOpen(false);
	}

	function handleClickOutside(event: MouseEvent) {
		if (
			!topNavButtonRef.current ||
			!topNavRef.current ||
			!event.target ||
			targetInside(event.target, topNavButtonRef.current)
		) {
			return;
		}

		if (!targetInside(event.target, topNavRef.current)) {
			setNavOpen(false);
		}
	}

	useEffect(() => {
		document.addEventListener("scroll", handleScroll, true);
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("scroll", handleScroll, true);
			document.removeEventListener("click", handleClickOutside, true);
		};
	});

	if (!showNav) {
		return <></>;
	}

	return (
		<nav className="flex mt-2" role="navigation" ref={topNavRef}>
			<div className="md:flex w-full md:w-auto">
				<ul
					className={`${!navOpen ? "hidden md:flex flex-row" : "hidden"} pr-0 mt-0 justify-between text-right`}
				>
					<li className="block mx-10 my-auto">
						<Link to={"/"} onClick={() => scrollTo(AppComponents.about)}>
							About
						</Link>
					</li>
					<li className="block mx-10 my-auto">
						<Link to={"/"} onClick={() => scrollTo(AppComponents.apps)}>
							Solutions
						</Link>
					</li>
					<li className="block mx-10 my-auto">
						<Link to={"/"} onClick={() => scrollTo(AppComponents.contact)}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex ml-10">
				<button
					className={`menu-btn ${navOpen ? "opened" : ""}`}
					type="button"
					onClick={() => setNavOpen(!navOpen)}
					ref={topNavButtonRef}
				>
					<span></span>
				</button>
			</div>
			<MobileNav opened={navOpen} />
		</nav>
	);
}
