import { useRef, useCallback } from "react";
import { gsap } from "gsap";
import { PropTypes } from "prop-types";
import styles from "./CircularTextButton.module.css"; // Импортируем модуль CSS

function CircularTextButton({ 
	text, 
	href = "https://t.me/GeorgiBukia",
	target = "_blank"
}) {
	const buttonRef = useRef(null);
	const circleRef = useRef(null);
	const isHovering = useRef(false);
	const isMagneticActive = useRef(false);

	const animateCircle = useCallback((e) => {
		const button = buttonRef.current;
		const circle = circleRef.current;
		if (!button || !circle || !isMagneticActive.current) return;

		const rect = button.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		gsap.set(circle, { x: mouseX, y: mouseY });
		gsap.to(circle, {
			scale: 5,
			duration: 0.1,
			ease: "linear",
		});
	}, []);

	const handleMouseEnter = useCallback((e) => {
		isHovering.current = true;
		isMagneticActive.current = true;
		animateCircle(e);
	}, [animateCircle]);

	const handleMouseLeave = useCallback(() => {
		isHovering.current = false;
		isMagneticActive.current = false;
		if (!circleRef.current) return;
		
		gsap.to(circleRef.current, {
			scale: 0,
			duration: 0.1,
			ease: "linear",
		});
	}, []);

	const handleMouseMove = useCallback((e) => {
		if (!isHovering.current || !isMagneticActive.current || !buttonRef.current || !circleRef.current) return;
		animateCircle(e);
	}, [animateCircle]);

	return (
		<a
			href={href}
			target={target}
			rel="noopener noreferrer"
			className={styles.button}
			ref={buttonRef}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			aria-label={text}
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
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
	target: PropTypes.string,
};

export default CircularTextButton;
