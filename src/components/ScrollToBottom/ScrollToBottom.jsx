import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

import Arrow from "../../assets/icons/Arrow";
import styles from "./ScrollToBottom.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollToBottom = () => {
	const { scroll } = useLocomotiveScroll();
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isBottomHalf, setIsBottomHalf] = useState(false);

	const throttle = useCallback((fn, delay) => {
		let lastCall = 0;

		return (...args) => {
			const now = Date.now();
			if (now - lastCall >= delay) {
				lastCall = now;
				fn(...args);
			}
		};
	}, []);

	useEffect(() => {
		if (!scroll) return;
		const handleScroll = (args) => {
			const scrollY = args.scroll.y;
			const limit = args.limit.y;

			// Обновляем текущее положение
			setScrollPosition(scrollY);
			const threshold = limit * 0.5;
			setIsBottomHalf(scrollY > threshold);
		};
		const throttledScrollHandler = throttle(handleScroll, 200);
		scroll.on("scroll", throttledScrollHandler);
		return () => {
			scroll.off("scroll", throttledScrollHandler);
		};
	}, [scroll, throttle]);

	const handleClick = () => {
		if (isBottomHalf) {
			scroll.scrollTo(0);
		} else {
			scroll.scrollTo("bottom");
		}
	};

	return ReactDOM.createPortal(
		<div
			className={styles.scrollToBottom}
			onClick={handleClick}
			role="button"
			title={isBottomHalf ? "Scroll to top" : "Scroll to bottom"}
			tabIndex="0"
		>
			<div
				className={` ${
					isBottomHalf
						? styles.arrowContainerRotated
						: styles.arrowContainer
				}`}
			>
				<Arrow />
			</div>
		</div>,
		document.body
	);
};

export default ScrollToBottom;
