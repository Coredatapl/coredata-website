import { ReactElement } from "react";
import LineIndicator from "./LineIndicator";

interface ConsoleRowProps {
  child: ReactElement;
}

export default function ConsoleRow({ child }: ConsoleRowProps) {
  return (
    <div className="flex flex-row">
      <LineIndicator />
      {child}
    </div>
  );
}
