import { ColorCode } from "./color";
import { SizeLevel } from "./size";

export type Circle = {
  x: number;
  y: number;
  size: SizeLevel;
  color: ColorCode;
  title: string;
  text?: string;
};
