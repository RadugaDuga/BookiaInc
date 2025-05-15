import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const WithFadeIn = ({
	children,
	thresholdEnter = 0.5,
	direction = "left",
	duration = 3,
	once = false,
	className = "",
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: thresholdEnter, once: false });

	const [hasBeenVisible, setHasBeenVisible] = useState(false);

	useEffect(() => {
		if (isInView) setHasBeenVisible(true);
	}, [isInView]);

	const show = once ? hasBeenVisible : isInView;

	const offset = 70;
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
				stiffness: 400,
				damping: 30,
				mass: 2.2,
			}}
		>
			{children}
		</motion.div>
	);
};

export default WithFadeIn;
