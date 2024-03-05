import { PropsWithChildren } from "react";

export default function Title({ children }: PropsWithChildren) {
  return (
    <h1 className={`font-semibold text-5xl xl:text-6xl text-shadow`}>
      {children}
    </h1>
  );
}
