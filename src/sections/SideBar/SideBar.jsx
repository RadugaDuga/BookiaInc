import ReactDOM from "react-dom";
import styles from "./SideBar.module.css"; // Импортируем стили для SideBar
import { useTheme } from "../../ThemeProvider";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useState } from "react";

const SideBar = () => {
	const { scroll } = useLocomotiveScroll();
	const { theme, toggleTheme } = useTheme();
	const [direction, setDirection] = useState("down");

	// Функция для прокрутки вверх
	const handleButtonClick = () => {
		if (direction === "down") {
			scroll.scrollTo("#contacts-section");
			setDirection("up");
		} else {
			scroll.scrollTo(0);
			setDirection("down");
		}
	};

	return ReactDOM.createPortal(
		<div className={styles.sidebar}>
			<button
				className={styles.button}
				title="Change theme"
				onClick={toggleTheme}
			>
				{theme === "light" ? "☀️" : "🌙"}
			</button>

			<button onClick={handleButtonClick}>
				{direction === "up" ? "↑" : "↓"}
			</button>
		</div>,

		document.body
	);
};

export default SideBar;
