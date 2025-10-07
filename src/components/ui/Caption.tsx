interface CaptionProps {
  message: string;
  color?: string;
  bgColor?: string;
}

export default function Caption({
  message,
  color = "white",
  bgColor = "bg-linear-to-b from-brand-blue to-brand-violet",
}: CaptionProps) {
  return (
    <div
      className={`inline-flex mb-6 px-3 py-1 text-xs text-center font-semibold uppercase shadow rounded-full text-${color} ${bgColor}`}
    >
      {message}
    </div>
  );
}
