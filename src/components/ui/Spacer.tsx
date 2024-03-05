interface SpacerProps {
  color: string;
  fillColor: string;
}

export default function Spacer({ color, fillColor }: SpacerProps) {
  return (
    <div
      className="absolute flex flex-col w-full h-20 top-0 bottom-auto left-0 right-0 -mt-20 p-0 overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      <svg
        className="svg-banner absolute bottom-0 m-0 p-0 overflow-hidden"
        style={{ margin: -1 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className={`${color} ${fillColor}`}
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  );
}
