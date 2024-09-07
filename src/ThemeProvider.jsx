// ThemeProvider.js
import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";

// Создание контекста темы
const ThemeContext = createContext();

// Хук для использования контекста темы
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

// Провайдер темы
export const ThemeProvider = ({ children }) => {
	// Инициализация темы из localStorage или по умолчанию "light"
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme ? savedTheme : "light";
	});

	// Изменение класса body при изменении темы
	useEffect(() => {
		document.body.className =
			theme === "light" ? "body-light" : "body-dark";
	}, [theme]);

	// Функция для переключения темы
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme); // Обновляем состояние темы
		localStorage.setItem("theme", newTheme); // Записываем новую тему в localStorage
	};

	// Контекстное значение, которое будет доступно всем компонентам
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
