import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

function MagneticProvider({
	children,
	enabled = true,
	magnetMultiplier = 1.2,
	radius = 200,
	hoverRadius = 300,
	moveDuration = 0.4,
	returnDuration = 0.8,
	moveEase = "power2.out",
	returnEase = "elastic.out(1, 0.5)",
	className = "",
	style = {},
}) {
	const magnetRef = useRef();
	const animationRef = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const [currentRadius, setCurrentRadius] = useState(radius);

	// Универсальная функция для анимации движения элемента
	function animateElement(x, y, duration, ease) {
		if (animationRef.current) {
			animationRef.current.kill();
		}

		animationRef.current = gsap.to(magnetRef.current, {
			x, y, duration, ease,
			onComplete: () => {
				if (x === 0 && y === 0) {
					setIsActive(false);
					setCurrentRadius(radius);
				}
			}
		});
	}

	// Функция обработки движения мыши
	function handleMagneticEffect(e) {
		if (!enabled || !magnetRef.current || !isActive) return;

		const rect = magnetRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const dx = e.clientX - centerX;
		const dy = e.clientY - centerY;
		
		// Используем текущий радиус для расчета нормализованного расстояния
		const distance = Math.sqrt(dx * dx + dy * dy) / currentRadius;

		if (distance < 1) {
			// Элемент в зоне магнитного эффекта
			if (currentRadius !== hoverRadius) {
				setCurrentRadius(hoverRadius);
			}

			const strength = Math.pow(1 - distance, 2) * magnetMultiplier;
			animateElement(dx * strength, dy * strength, moveDuration, moveEase);
		} else if (isActive) {
			// Элемент вышел из зоны действия - возвращаем на место
			animateElement(0, 0, returnDuration, returnEase);
		}
	}

	useEffect(() => {
		if (!enabled) return;
		const element = magnetRef.current;
		if (!element) return;

		// Обработчики событий
		const handleMouseEnter = () => setIsActive(true);
		const handleMouseLeave = () => animateElement(0, 0, returnDuration, returnEase);
		
		// Привязываем обработчики
		element.addEventListener("mouseenter", handleMouseEnter);
		window.addEventListener("mousemove", handleMagneticEffect);
		element.addEventListener("mouseleave", handleMouseLeave);

		// Очистка при размонтировании
		return () => {
			element.removeEventListener("mouseenter", handleMouseEnter);
			window.removeEventListener("mousemove", handleMagneticEffect);
			element.removeEventListener("mouseleave", handleMouseLeave);
			
			if (animationRef.current) {
				animationRef.current.kill();
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [enabled, isActive, currentRadius, magnetMultiplier, 
	    moveDuration, moveEase, returnDuration, returnEase]);

	return (
		<span
			ref={magnetRef}
			className={className}
			style={{
				display: "inline-block",
				transform: "translate3d(0, 0, 0)",
				willChange: "transform",
				...style,
			}}
		>
			{children}
		</span>
	);
}

MagneticProvider.propTypes = {
	children: PropTypes.node,
	enabled: PropTypes.bool,
	magnetMultiplier: PropTypes.number,
	radius: PropTypes.number,
	hoverRadius: PropTypes.number,
	moveDuration: PropTypes.number,
	returnDuration: PropTypes.number,
	moveEase: PropTypes.string,
	returnEase: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
};

export default MagneticProvider;
