import { ReactElement, ReducerAction } from "react";

export interface IThemeProvider {
	children: ReactElement;
	theme: "light" | "dark";
	setLightThemeAction: () => void;
	setDarkThemeAction: () => void;
}
