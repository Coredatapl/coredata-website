import DOMPurify from "dompurify";
import { marked } from "marked";

export enum AppComponents {
  navbar = "navbar",
  hero = "hero",
  about = "about",
  apps = "apps",
  ai = "ai",
  decisions = "decisions",
  process = "process",
  documents = "documents",
  knowledge = "knowledge",
  consultations = "consultations",
  support = "support",
  usecases = "usecases",
  technologies = "technologies",
  security = "security",
  contact = "contact",
}

export const AppTheme = {
  Light: "light",
  Dark: "dark",
  Color: "color",
};

export enum HtmlElementType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
}

export const targetInside = (
  target: EventTarget,
  element: HTMLElement,
): boolean => {
  return element?.contains(target as Node);
};

export const parseMarkdown = async (markdownText: string): Promise<string> => {
  const dirtyHtml = await marked.parse(markdownText);
  const cleanHtml = DOMPurify.sanitize(dirtyHtml);
  return cleanHtml;
};
