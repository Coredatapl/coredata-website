interface SubSymbolProps {
  icon: string;
  color?: string;
  bgColor?: string;
}

export default function SubSymbol({
  icon,
  color = "text-brand-violet",
  bgColor = "bg-white",
}: SubSymbolProps) {
  return (
    <div
      className={`inline-flex w-12 h-12 mb-5 p-3 text-center items-center justify-center shadow-lg rounded-full ${color} ${bgColor}`}
    >
      <i className={icon}></i>
    </div>
  );
}
