import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

function MagneticProvider({ children }) {
	const magnetMultiplier = 1; // Установите множитель магнита
	const [magneticRadiusX, setMagneticRadiusX] = useState(200); // Радиус по оси X
	const [magneticRadiusY, setMagneticRadiusY] = useState(150); // Радиус по оси Y
	const magnetRef = useRef(); // Реф для магнита

	useEffect(() => {
		const currentEl = magnetRef.current;

		const onMouseMove = (e) => {
			const rect = currentEl.getBoundingClientRect();
			const buttonCenterX = rect.left + rect.width / 2;
			const buttonCenterY = rect.top + rect.height / 2;

			const distanceX = e.clientX - buttonCenterX;
			const distanceY = e.clientY - buttonCenterY;

			// Нормализуем расстояние в пределах радиуса
			const normalizedDistanceX = distanceX / magneticRadiusX;
			const normalizedDistanceY = distanceY / magneticRadiusY;

			const distance = Math.sqrt(
				normalizedDistanceX ** 2 + normalizedDistanceY ** 2
			);

			if (distance < 1) {
				setMagneticRadiusX(300); // Увеличиваем радиус, когда курсор находится в зоне магнита
				setMagneticRadiusY(250);

				const magnetStrength =
					Math.pow(1 - distance, 2) * magnetMultiplier;

				// Изменено: используем 'x' и 'y' для корректного движения к курсору
				gsap.to(currentEl, {
					x: distanceX * magnetStrength,
					y: distanceY * magnetStrength,
					duration: 0.6,
					ease: "power2.out",
				});
			} else {
				setMagneticRadiusX(200); // Восстанавливаем радиус, когда курсор выходит из зоны магнита
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
			// Восстанавливаем радиус и возвращаем элемент в исходное положение
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
