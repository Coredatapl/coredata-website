import { PropsWithChildren } from "react";

interface ConsoleOutputProps {
  success: boolean;
  result: string;
}

export default function ConsoleOutput({
  success,
  result,
  children,
}: ConsoleOutputProps & PropsWithChildren) {
  return (
    <div
      className={`flex flex-row w-full ${children ? "justify-between" : "justify-start"}`}
    >
      {children && (
        <div className="pr-10">
          {children}
          {" ..."}
        </div>
      )}
      <div className={`${success ? "text-brand-green" : ""}`}>
        {result}
        {result && "."}
      </div>
    </div>
  );
}
