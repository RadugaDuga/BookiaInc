import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const WithFadeIn = ({
	children,
	thresholdEnter = 0.8,
	direction = "left",
	duration = 3,
	once = true,
	className = "",
	offset = 100,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: thresholdEnter, once: false });

	const [hasBeenVisible, setHasBeenVisible] = useState(false);
	const [loaderActive, setLoaderActive] = useState(true);

	useEffect(() => {
		const handleLoaderHide = () => setLoaderActive(false);
		window.addEventListener("initial-loader-hide", handleLoaderHide);
		// Если лоадера уже нет (например, переход без лоадера)
		if (!document.getElementById("initial-loader")) setLoaderActive(false);
		return () => {
			window.removeEventListener("initial-loader-hide", handleLoaderHide);
		};
	}, []);

	useEffect(() => {
		if (isInView) setHasBeenVisible(true);
	}, [isInView]);

	const show = !loaderActive && (once ? hasBeenVisible : isInView);

	const base = { opacity: 0 };

	const variants = {
		hidden:
			direction === "left"
				? { ...base, x: -offset }
				: direction === "right"
				? { ...base, x: offset }
				: direction === "top"
				? { ...base, y: -offset }
				: direction === "bottom"
				? { ...base, y: offset }
				: { ...base },
		visible: { x: 0, y: 0, opacity: 1 },
	};

	return (
		<motion.div
			ref={ref}
			className={className}
			style={{ transformOrigin: "center center", height: "100%" }}
			variants={variants}
			initial="hidden"
			animate={show ? "visible" : "hidden"}
			transition={{
				duration,
				opacity: { ease: [0, 0, 0, 1] },
				type: "spring",
				stiffness: 200,
				damping: 60,
				mass: 2.2,
			}}
		>
			{children}
		</motion.div>
	);
};

export default WithFadeIn;
