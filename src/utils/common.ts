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
