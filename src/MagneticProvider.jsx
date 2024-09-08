import { useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import gsap from "gsap";

function MagneticProvider({ children }) {
	const magnetMultiplier = 1;

	const [magneticRadiusX, setMagneticRadiusX] = useState(200);
	const [magneticRadiusY, setMagneticRadiusY] = useState(150);

	const magnetRef = useRef();

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
			} else {
				setMagneticRadiusX(200);
				setMagneticRadiusY(150);

				gsap.to(currentEl, {
					x: 0,
					y: 0,
					duration: 0.8,
					ease: "elastic.out(1, 0.5)",
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
	}, [magneticRadiusX, magneticRadiusY]);

	return <span ref={magnetRef}>{children}</span>;
}

MagneticProvider.propTypes = {
	children: PropTypes.node,
};
export default MagneticProvider;
