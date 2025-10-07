import { Link } from "react-router";
import { useUi } from "../../hooks/useUi";

interface MobileNavItemProps {
  to: string;
  label: string;
  id?: string;
}

export default function MobileNavItem({ id, to, label }: MobileNavItemProps) {
  const { scrollTo } = useUi();

  function handleClick() {
    if (id) {
      scrollTo(id);
    }
  }

  return (
    <Link
      to={to}
      onClick={() => handleClick()}
      className="block transition-transform transition-discrete duration-300 ease-in-out hover:text-brand-blue"
    >
      {label}
    </Link>
  );
}
