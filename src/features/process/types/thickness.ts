import { ThicknessLevels } from "../utils/config";

export type ThicknessLevel = keyof typeof ThicknessLevels;
export type ThicknessValue = (typeof ThicknessLevels)[ThicknessLevel];
