import NavItem from "./NavItem";

interface MobileNavItemProps {
  to: string;
  label: string;
  id?: string;
}

export default function MobileNavItem({ id, to, label }: MobileNavItemProps) {
  return (
    <NavItem
      path={to}
      hash={id}
      label={label}
      className="block transition-transform transition-discrete duration-300 ease-in-out hover:text-brand-blue"
    />
  );
}
