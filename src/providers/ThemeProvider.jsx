import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";


const ThemeContext = createContext();

// Хук для использования контекста темы
export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
	// Инициализация темы из localStorage или по умолчанию "light" не путать с Yagami Light
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme ? savedTheme : "light";
	});

	useEffect(() => {
		document.body.className =
			theme === "light" ? "body-light" : "body-dark";
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme); 
		localStorage.setItem("theme", newTheme); 
	};

	const value = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node,
};
