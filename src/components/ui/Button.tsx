interface ButtonProps {
  label: string;
  icon?: string;
  onClick: () => void;
}

export default function Button({ label, icon, onClick }: ButtonProps) {
  return (
    <button
      className="mr-1 px-5 py-3 text-sm text-white font-semibold tracking-widest rounded-xl bg-coredataViolet hover:bg-indigo-600 active:bg-indigo-600 shadow hover:shadow-lg ease-in-out transition-all duration-300"
      onClick={onClick}
    >
      {label}{" "}
      {icon ? (
        <i className={`${icon} inline-block align-middle my-auto mt-1`}></i>
      ) : null}
    </button>
  );
}
