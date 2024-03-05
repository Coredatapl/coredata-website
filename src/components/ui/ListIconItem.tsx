interface ListIconItemProps {
  message: string;
  icon: string;
  iconColor?: string;
  bgColor?: string;
}

export default function ListIconItem({
  message,
  icon = "",
  iconColor = "coredataViolet",
  bgColor = "white",
}: ListIconItemProps) {
  return (
    <li className="py-2">
      <div className="flex items-center">
        <div>
          <span
            className={`inline-block mr-3 py-1 px-2 text-xs font-semibold uppercase rounded-full text-${iconColor} bg-${bgColor}`}
          >
            <i className={icon}></i>
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-shadow-xs">{message}</h4>
        </div>
      </div>
    </li>
  );
}
