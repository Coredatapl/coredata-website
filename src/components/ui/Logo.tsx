import imgLogoColor from "../../assets/img/logo-color.svg";
import imgLogoLight from "../../assets/img/logo-light.svg";

type LogoStyle = "color" | "light";

interface LogoProps {
  style?: LogoStyle;
}

export default function Logo({ style = "color" }: LogoProps) {
  return (
    <div className="flex">
      <img
        className="w-32 h-10"
        src={style === "light" ? imgLogoLight : imgLogoColor}
        alt="BoardApp"
      />
    </div>
  );
}
