import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./SideBar.module.css"; // Импортируем стили для SideBar
import { useTheme } from "../../ThemeProvider";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import gsap from "gsap";

const SideBar = () => {
	const { scroll } = useLocomotiveScroll();
	const { theme, toggleTheme } = useTheme();

	const [activeSection, setActiveSection] = useState("");

	const lineRef = useRef(null); // Создаем реф для палочки
	const buttonsRefs = useRef([]); // Создаем рефы для кнопок

	// Функция для прокрутки к секции
	const scrollToSection = (targetId) => () => {
		const target = document.querySelector(targetId);
		if (scroll && target) {
			scroll.scrollTo(target);
		}
	};

	// Функция для определения класса кнопки
	const getButtonClassName = (sectionId) => {
		return activeSection === sectionId
			? `${styles.button} ${styles.active}`
			: styles.button;
	};

	useEffect(() => {
		const sections = document.querySelectorAll("section");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.3,
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	// Анимация перемещения палочки и изменения цвета и тени
	useEffect(() => {
		if (lineRef.current && buttonsRefs.current) {
			// Сброс цвета для всех кнопок
			buttonsRefs.current.forEach((button) => {
				gsap.to(button, {
					duration: 0.3,
					color: "", // Сброс к исходному цвету текста
					ease: "power3.out",
				});
			});

			const activeButton = buttonsRefs.current.find(
				(ref) => ref.dataset.section === activeSection
			);

			if (activeButton) {
				const { top, height } = activeButton.getBoundingClientRect();
				const offsetTop = top + window.scrollY; // Учитываем прокрутку окна

				// Настройка цвета и тени для каждого активного элемента
				const colorMap = {
					"preview-section": "#FF6347", // Цвет для секции "preview-section"
					"story-section": "#4682B4", // Цвет для секции "story-section"
					"gradient-section": "#31CD32", // Цвет для секции "skills-section"
					"skills-section": "#32CD32", // Цвет для секции "skills-section"
					"arts-section": "#FFD700", // Цвет для секции "arts-section"
					"contacts-section": "#FFD700", // Цвет для секции "arts-section"
				};

				const shadowColorMap = {
					"preview-section": "rgba(255, 99, 71, 1)", // Цвет тени для секции "preview-section"
					"story-section": "rgba(70, 130, 180, 1)", // Цвет тени для секции "story-section"
					"gradient-section": "rgba(50, 205, 50, 1)", // Цвет тени для секции "skills-section"
					"skills-section": "rgba(50, 205, 50, 1)", // Цвет тени для секции "skills-section"
					"arts-section": "rgba(255, 215, 0, 1)", // Цвет тени для секции "arts-section"
					"contacts-section": "rgba(255, 215, 0, 1)", // Цвет тени для секции "arts-section"
				};

				const lineColor = colorMap[activeSection] || "#000";
				const lineShadowColor =
					shadowColorMap[activeSection] || "rgba(0, 0, 0, 0.3)";

				// Анимация изменения цвета палочки и тени
				gsap.to(lineRef.current, {
					duration: 0.3,
					top: offsetTop,
					height: height,
					backgroundColor: lineColor, // Анимация цвета палочки
					ease: "power3.out",
				});

				// Устанавливаем цвет тени через CSS
				lineRef.current.style.boxShadow = `0 0 50px 5px ${lineShadowColor}`; // Только цвет тени меняется

				// Анимация изменения цвета текста активной кнопки
				gsap.to(activeButton, {
					duration: 0.3,
					color: lineColor, // Анимация цвета текста кнопки
					ease: "power3.out",
				});
			}
		}
	}, [activeSection]);

	return ReactDOM.createPortal(
		<div className={styles.overlay}>
			{/* Линия для анимации перемещения */}
			<div ref={lineRef} className={styles.line}></div>

			<button
				className={styles.button}
				title="Change theme"
				onClick={toggleTheme}
			>
				{theme === "light" ? "☀️" : "🌙"}
			</button>
			{[
				"preview-section",
				"story-section",
				"gradient-section",
				"skills-section",
				"arts-section",
				"contacts-section",
			].map((section, index) => (
				<button
					key={section}
					ref={(el) => (buttonsRefs.current[index] = el)} // Привязываем реф к кнопке
					data-section={section}
					className={getButtonClassName(section)}
					onClick={scrollToSection(`#${section}`)}
				>
					{`0${index + 1}`}
				</button>
			))}
		</div>,
		document.body
	);
};

export default SideBar;
