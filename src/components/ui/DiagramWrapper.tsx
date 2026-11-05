import { PropsWithChildren } from "react";

export default function DiagramWrapper({ children }: PropsWithChildren) {
  return (
    <div className="p-6 bg-dot-grid-dark bg-diagram-board rounded-4xl shadow-2xl">
      {children}
    </div>
  );
}
