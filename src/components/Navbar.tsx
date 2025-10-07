import { Link } from "react-router";
import { useUi } from "../hooks/useUi";
import { AppComponents } from "../utils/common";
import Logo from "./ui/Logo";
import TopNav from "./ui/TopNav";

interface NavbarProps {
  showNav?: boolean;
}

export default function Navbar({ showNav }: NavbarProps) {
  const { scrollTop } = useUi();

  return (
    <header
      id={AppComponents.navbar}
      className="fixed z-20 w-full bg-slate-100/70 backdrop-blur-lg"
    >
      <div className="container flex w-11/12 md:w-8/12 py-4 mx-auto justify-between items-start">
        <Link to={"/"} onClick={() => scrollTop()} className="mt-2">
          <Logo />
        </Link>
        <TopNav showNav={showNav} />
      </div>
    </header>
  );
}
