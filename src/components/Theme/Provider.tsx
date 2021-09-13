import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dis } from "cryptic-redux";

const Provider = ({ children }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	const dispatch = useDispatch();

	function toggleTheme(): void {
		setTheme(theme === "light" ? "dark" : "light");

		if (theme === "dark") {
			dispatch(setLightMode());
		} else if (theme === "light") {
			dispatch(setDarkMode());
		}
	}

	useEffect(() => {
		if (
			localStorage?.getItem("theme") === "light" ||
			localStorage?.getItem("theme") === "dark"
		) {
			const storagedTheme = localStorage?.getItem("theme");

			if (storagedTheme === "light") {
				setTheme("light");
			} else if (storagedTheme === "dark") {
				setTheme("dark");
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
