interface FormInfoProps {
  message: string;
  type?: "error" | "info" | "success";
  icon?: string;
}

export default function FormInfo({ message, type }: FormInfoProps) {
  const infoType = type ?? "info";
  let color = "text-sky-700";
  let bgColor = "bg-sky-100";
  if (infoType === "error") {
    color = "text-red-800";
    bgColor = "bg-red-100";
  } else if (infoType === "success") {
    color = "text-green-800";
    bgColor = "bg-green-100";
  }

  return (
    <div
      className={`inline-flex align-middle px-1 text-xs rounded ${color} ${bgColor}`}
      role="alert"
    >
      {message}
    </div>
  );
}
