interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  onClick?: () => void;
}

export default function Button({ label, type, icon, onClick }: ButtonProps) {
  return (
    <button
      className="mr-1 px-5 py-3 text-sm text-white font-semibold tracking-widest rounded-lg bg-coredataViolet hover:bg-indigo-600 active:bg-indigo-700 shadow-md hover:shadow-xl ease-in-out transition-all duration-300"
      onClick={onClick}
      type={type}
    >
      {label}{" "}
      {icon ? (
        <i className={`${icon} inline-block align-middle my-auto mt-1`}></i>
      ) : null}
    </button>
  );
}
