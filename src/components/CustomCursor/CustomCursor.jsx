import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./CustomCursor.module.css";

function CustomCursor() {
	const cursorRef = useRef(null);
	const cursorHoverRef = useRef(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		const cursorHover = cursorHoverRef.current;

		const onMouseMove = (e) => {
			gsap.to(cursor, {
				x: e.clientX,
				y: e.clientY,
				ease: "none",
				duration: 0,
				overwrite: "auto", // Ensure animation completion
			});
			gsap.to(cursorHover, {
				x: e.clientX,
				y: e.clientY,
				ease: "none",
				duration: 0,
				overwrite: "auto", // Ensure animation completion
			});
		};

		const onMouseOut = (e) => {
			if (!e.relatedTarget || e.relatedTarget.nodeName === "HTML") {
				gsap.to(cursor, { autoAlpha: 0, duration: 0 }); // Скрываем основной курсор
				gsap.to(cursorHover, { autoAlpha: 0, duration: 0 }); // Скрываем hover курсор
			}
		};

		const onMouseOver = () => {
			gsap.to(cursor, { autoAlpha: 1, duration: 0 }); // Показываем основной курсор
			gsap.to(cursorHover, { autoAlpha: 0, duration: 0 }); // Скрываем hover курсор
		};

		const onElementHover = () => {
			gsap.to(cursor, { autoAlpha: 0, duration: 0, overwrite: true }); // Скрываем основной курсор мгновенно
			gsap.to(cursorHover, {
				autoAlpha: 1,
				duration: 0,
				overwrite: true,
			}); // Показываем hover курсор мгновенно
		};

		const onElementOut = () => {
			gsap.to(cursor, { autoAlpha: 1, duration: 0, overwrite: true }); // Показываем основной курсор мгновенно
			gsap.to(cursorHover, {
				autoAlpha: 0,
				duration: 0,
				overwrite: true,
			}); // Скрываем hover курсор мгновенно
		};

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseout", onMouseOut);
		document.addEventListener("mouseover", onMouseOver);

		// Добавляем обработчики наведения для всех ссылок
		const elements = document.querySelectorAll("a, button");
		elements.forEach((element) => {
			element.addEventListener("mouseenter", onElementHover);
			element.addEventListener("mouseleave", onElementOut);
		});

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseout", onMouseOut);
			document.removeEventListener("mouseover", onMouseOver);

			// Удаляем обработчики наведения для всех ссылок и кнопок
			elements.forEach((element) => {
				element.removeEventListener("mouseenter", onElementHover);
				element.removeEventListener("mouseleave", onElementOut);
			});
		};
	}, []);

	return (
		<div>
			<div ref={cursorRef} className={styles.cursor}></div>
			<div ref={cursorHoverRef} className={styles.hover}></div>
		</div>
	);
}

export default CustomCursor;
