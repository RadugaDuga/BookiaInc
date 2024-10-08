import { useRef } from "react";
import { gsap } from "gsap";
import { PropTypes } from "prop-types";
import styles from "./CircularTextButton.module.css"; // Импортируем модуль CSS

function CircularTextButton({ text }) {
	const buttonRef = useRef(null);
	const circleRef = useRef(null);
	const isHovering = useRef(false); // Флаг для отслеживания наведения

	const handleMouseEnter = (e) => {
		isHovering.current = true; // Устанавливаем флаг наведения
		animateCircle(e);
	};

	const handleMouseLeave = () => {
		isHovering.current = false; // Сбрасываем флаг наведения
		gsap.to(circleRef.current, {
			scale: 0,
			duration: 0.1, // Ускоряем исчезновение круга
			ease: "linear",
		});
	};

	const animateCircle = (e) => {
		const button = buttonRef.current;
		const circle = circleRef.current;

		const rect = button.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		gsap.set(circle, { x: mouseX, y: mouseY });
		if (isHovering.current) {
			gsap.to(circle, {
				scale: 5,
				duration: 0.1, // Ускоряем появление круга
				ease: "linear", // Быстрый выход для более резкого эффекта
			});
		}
	};

	const handleMouseMove = (e) => {
		if (!isHovering.current) return; // Если не наводим, не выполняем анимацию
		animateCircle(e);
	};

	return (
		<a
			href="https://t.me/GeorgiBukia"
			target="_blank"
			className={styles.button}
			ref={buttonRef}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className={styles.button_text}
				style={{ "--btn-text": `"${text}"` }}
			>
				{text}
			</div>
			<span ref={circleRef} className={styles.fillCircle} />{" "}
			{/* Элемент круга для анимации */}
		</a>
	);
}

CircularTextButton.propTypes = {
	text: PropTypes.string,
};

export default CircularTextButton;
