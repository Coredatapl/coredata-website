export enum AppComponents {
  navbar = "navbar",
  hero = "hero",
  about = "about",
  apps = "apps",
  ai = "ai",
  consultations = "consultations",
  technologies = "technologies",
  contact = "contact",
}

export const targetInside = (
  target: EventTarget,
  element: HTMLElement
): boolean => {
  return element && element.contains(target as Node);
};
