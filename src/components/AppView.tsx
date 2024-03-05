import { PropsWithChildren } from "react";

export default function AppView({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full text-gray-700 bg-slate-100 antialiased">
      {children}
    </div>
  );
}
