import { PropsWithChildren } from "react";
import { AppTheme } from "../../utils/common";

interface BulletPointProps {
  title: string;
  icon: string;
  iconColor?: string;
  bgColor?: string;
  theme?: string;
}

export default function BulletPoint({
  title,
  icon = "",
  iconColor = "brand-violet",
  theme,
  children,
}: BulletPointProps & PropsWithChildren) {
  function getTheme() {
    switch (theme) {
      case AppTheme.Light:
        return "text-white shadow-gray-500";
      case AppTheme.Color:
        return "text-brand-blue shadow-gray-100";
      case AppTheme.Dark:
      default:
        return "shadow-gray-200 shadow-gray-300";
    }
  }

  return (
    <div className="mt-4">
      <div className="flex flex-row items-center">
        <div className={`inline-block mr-3 -mb-1 text-sm text-${iconColor}`}>
          <i className={`${icon}`}></i>
        </div>
        <h4
          className={`font-semibold tracking-wide text-shadow-xs ${getTheme()}`}
        >
          {title}
        </h4>
      </div>
      <div className="flex flex-row mt-4">{children}</div>
    </div>
  );
}
