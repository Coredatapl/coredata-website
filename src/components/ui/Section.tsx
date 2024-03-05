import { PropsWithChildren } from "react";

interface SectionProps {
  id?: string;
  bgColor?: string;
  style?: string;
}

export default function Section({
  children,
  id,
  bgColor = "",
  style = "",
}: PropsWithChildren<SectionProps>) {
  return (
    <section
      id={id}
      className={`flex w-full pt-20${bgColor ? ` ${bgColor}` : ""}${style ? ` ${style}` : ""}`}
    >
      <div className="container w-11/12 md:w-8/12 mx-auto text-center">
        {children}
      </div>
    </section>
  );
}
