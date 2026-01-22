import { Link } from "react-router";
import { useUi } from "../../hooks/useUi";

interface NavItemProps {
  path: string;
  label: string;
  hash?: string;
  className?: string;
}

export default function NavItem({
  hash,
  path,
  label,
  className,
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

  function handleClick() {
    if (path === "/" && hash) {
      scrollTo(hash);
    }
  }

  return (
    <Link to={getTo()} onClick={() => handleClick()} className={className}>
      {label}
    </Link>
  );
}
