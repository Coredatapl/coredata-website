interface TextAreaProps {
  name: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export default function TextArea({
  name,
  id,
  placeholder = "Your message",
  required,
  readonly,
  error,
  disabled,
}: TextAreaProps) {
  const style = error
    ? "border-b-red-700 focus:border-b-red-600"
    : "border-b-gray-200 focus:border-b-coredataBlue";

  return (
    <textarea
      className={`block w-full mt-1 mb-4 py-2 px-1 text-xs md:text-sm shadow-sm outline-none border-t-transparent border-b border-x-transparent focus:border-t-transparent focus:border-x-transparent ${style}`}
      name={name}
      rows={4}
      id={id}
      placeholder={placeholder}
      required={required}
      readOnly={readonly}
      disabled={disabled}
    ></textarea>
  );
}
