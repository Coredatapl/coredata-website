export const HeaderTheme = {
  Light: "light",
  Dark: "dark",
  Color: "color",
};

interface HeaderProps {
  message: string;
  theme?: string;
}

export default function Header({
  message,
  theme = HeaderTheme.Dark,
}: HeaderProps) {
  function getTheme() {
    switch (theme) {
      case HeaderTheme.Light:
        return "text-white shadow-gray-500";
      case HeaderTheme.Color:
        return "text-coredataBlue shadow-gray-100";
      case HeaderTheme.Dark:
      default:
        return "shadow-gray-100";
    }
  }

  return (
    <h2
      className={`w-full mb-6 text-2xl font-semibold text-shadow tracking-wide ${getTheme()}`}
    >
      {message}
    </h2>
  );
}
