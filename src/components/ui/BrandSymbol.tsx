import imgSymbolColor from "../../assets/img/symbol-color.svg";
import imgSymbolLight from "../../assets/img/symbol-light.svg";

type SymbolStyle = "color" | "light";

interface SymbolProps {
	style?: SymbolStyle;
}

export default function BrandSymbol({ style = "color" }: SymbolProps) {
	return (
		<div className="flex">
			<img
				className="w-20 min-w-20 h-20"
				src={style === "light" ? imgSymbolLight : imgSymbolColor}
				alt="Coredata"
			/>
		</div>
	);
}
