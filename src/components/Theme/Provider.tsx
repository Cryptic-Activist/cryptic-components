import React, { useEffect, FC } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";

import { IThemeProvider } from "../../interfaces/components/Theme";
import { themes } from "src/styles";

console.log("themes:", themes);

const Provider: FC<IThemeProvider> = ({
	children,
	theme,
	setLightThemeAction,
	setDarkThemeAction,
}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (
			localStorage?.getItem("theme") === "light" ||
			localStorage?.getItem("theme") === "dark"
		) {
			const storagedTheme = localStorage?.getItem("theme");

			if (storagedTheme === "light") {
				dispatch(setLightThemeAction());
			} else if (storagedTheme === "dark") {
				dispatch(setDarkThemeAction());
			}
		} else {
			localStorage?.setItem("theme", theme);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
			{children}
		</ThemeProvider>
	);
};

export default Provider;
