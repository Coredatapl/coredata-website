import { Children, isValidElement, PropsWithChildren } from "react";
import ConsoleRow from "./ConsoleRow";

interface ConsoleProps {
  live?: boolean;
}

export default function Console({
  live,
  children,
}: ConsoleProps & PropsWithChildren) {
  const underscore = "_";
  const modifiedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return <ConsoleRow child={child} />;
    }
    return child;
  });

  return (
    <div className="p-4 bg-slate-800 rounded-2xl shadow-2xl shadow-slate-900 font-mono text-nowrap text-slate-300">
      {modifiedChildren}
      {live && (
        <ConsoleRow
          child={<div className="w-full animate-blink">{underscore}</div>}
        />
      )}
    </div>
  );
}
