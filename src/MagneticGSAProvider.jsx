import { useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import gsap from "gsap";
import cursorStyles from "./components/CustomCursor/CustomCursor.module.css";

function MagneticGSAProvider({ children }) {
	const magnetMultiplier = 1;

	const [magneticRadiusX, setMagneticRadiusX] = useState(200);
	const [magneticRadiusY, setMagneticRadiusY] = useState(150);

	const magnetRef = useRef();
	const cursor = document.querySelector(`.${cursorStyles.cursor}`);

	useEffect(() => {
		const currentEl = magnetRef.current;

		const onMouseMove = (e) => {
			const rect = currentEl.getBoundingClientRect();
			const buttonCenterX = rect.left + rect.width / 2;
			const buttonCenterY = rect.top + rect.height / 2;

			const distanceX = e.clientX - buttonCenterX;
			const distanceY = e.clientY - buttonCenterY;

			const normalizedDistanceX = distanceX / magneticRadiusX;
			const normalizedDistanceY = distanceY / magneticRadiusY;

			const distance = Math.sqrt(
				normalizedDistanceX ** 2 + normalizedDistanceY ** 2
			);

			if (distance < 1) {
				setMagneticRadiusX(300);
				setMagneticRadiusY(250);

				const magnetStrength =
					Math.pow(1 - distance, 2) * magnetMultiplier;

				gsap.to(currentEl, {
					x: distanceX * magnetStrength,
					y: distanceY * magnetStrength,
					duration: 0.6,
					ease: "power2.out",
				});

				gsap.to(cursor, {
					width: 200,
					height: 200,
					ease: "power3.out",
					duration: 0.5,
					overwrite: "auto",
				});
			} else {
				setMagneticRadiusX(200);
				setMagneticRadiusY(150);

				gsap.to(currentEl, {
					x: 0,
					y: 0,
					duration: 0.8,
					ease: "elastic.out(1, 0.5)",
				});

				gsap.to(cursor, {
					width: 20,
					height: 20,
					ease: "power3.out",
					duration: 0.5,
					overwrite: "auto",
				});
			}
		};

		const onMouseLeave = () => {
			setMagneticRadiusX(300);
			setMagneticRadiusY(300);

			gsap.to(currentEl, {
				x: 0,
				y: 0,
				duration: 0.8,
				ease: "elastic.out(1, 0.5)",
			});
		};

		window.addEventListener("mousemove", onMouseMove);
		currentEl.addEventListener("mouseleave", onMouseLeave);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			currentEl.removeEventListener("mouseleave", onMouseLeave);
		};
	}, [magneticRadiusX, magneticRadiusY, cursor]);

	return <div ref={magnetRef}>{children}</div>;
}

MagneticGSAProvider.propTypes = {
	children: PropTypes.node,
};
export default MagneticGSAProvider;
