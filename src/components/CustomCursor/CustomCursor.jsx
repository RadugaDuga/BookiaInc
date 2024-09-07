import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./CustomCursor.module.css";

function CustomCursor() {
	const cursorRef = useRef(null);
	const cursorHoverRef = useRef(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		const cursorHover = cursorHoverRef.current; // Исправлено

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
				gsap.to(cursor, { autoAlpha: 0, duration: 0.2 }); // Скрываем основной курсор
				gsap.to(cursorHover, { autoAlpha: 0, duration: 0.2 }); // Скрываем hover курсор
			}
		};

		const onMouseOver = () => {
			gsap.to(cursor, { autoAlpha: 1, duration: 0.2 }); // Показываем основной курсор
			gsap.to(cursorHover, { autoAlpha: 0, duration: 0.2 }); // Скрываем hover курсор
		};

		const onLinkHover = () => {
			gsap.to(cursor, { autoAlpha: 0, duration: 0.2 }); // Скрываем основной курсор
			gsap.to(cursorHover, { autoAlpha: 1, duration: 0.2 }); // Показываем hover курсор
		};

		const onLinkOut = () => {
			gsap.to(cursor, { autoAlpha: 1, duration: 0.2 }); // Показываем основной курсор
			gsap.to(cursorHover, { autoAlpha: 0, duration: 0.2 }); // Скрываем hover курсор
		};

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseout", onMouseOut);
		document.addEventListener("mouseover", onMouseOver);

		// Добавляем обработчики наведения для всех ссылок
		const links = document.querySelectorAll("a");
		links.forEach((link) => {
			link.addEventListener("mouseenter", onLinkHover);
			link.addEventListener("mouseleave", onLinkOut);
		});

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseout", onMouseOut);
			document.removeEventListener("mouseover", onMouseOver);

			// Удаляем обработчики наведения для всех ссылок
			links.forEach((link) => {
				link.removeEventListener("mouseenter", onLinkHover);
				link.removeEventListener("mouseleave", onLinkOut);
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
