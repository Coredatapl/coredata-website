export const targetInside = (
  target: EventTarget,
  element: HTMLElement
): boolean => {
  return element && element.contains(target as Node);
};
