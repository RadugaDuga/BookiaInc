import { useEffect, useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

function MagneticProvider({
	children,
	enabled = true,
	magnetMultiplier = 1.2,
	initialRadiusX = 200,
	initialRadiusY = 200,
	hoverRadiusX = 300,
	hoverRadiusY = 300,
	moveDuration = 0.4,
	returnDuration = 0.8,
	moveEase = "power2.out",
	returnEase = "elastic.out(1, 0.5)",
	className = "",
	style = {},
}) {
	const [magneticRadiusX, setMagneticRadiusX] = useState(initialRadiusX);
	const [magneticRadiusY, setMagneticRadiusY] = useState(initialRadiusY);
	const magnetRef = useRef();
	const animationRef = useRef(null);
	const isMagneticActive = useRef(false);
	const returnAnimationRef = useRef(null);

	const calculateDistance = useCallback(
		(e, rect) => {
			const buttonCenterX = rect.left + rect.width / 2;
			const buttonCenterY = rect.top + rect.height / 2;

			const scrollX = window.scrollX || window.pageXOffset;
			const scrollY = window.scrollY || window.pageYOffset;

			const distanceX = e.clientX + scrollX - buttonCenterX;
			const distanceY = e.clientY + scrollY - buttonCenterY;

			const normalizedDistanceX = distanceX / magneticRadiusX;
			const normalizedDistanceY = distanceY / magneticRadiusY;

			const distance = Math.sqrt(
				normalizedDistanceX ** 2 + normalizedDistanceY ** 2
			);

			return {
				distance,
				distanceX,
				distanceY,
				normalizedDistanceX,
				normalizedDistanceY,
			};
		},
		[magneticRadiusX, magneticRadiusY]
	);

	const returnToInitialPosition = useCallback(
		(currentEl) => {
			if (returnAnimationRef.current) {
				returnAnimationRef.current.kill();
			}

			returnAnimationRef.current = gsap.to(currentEl, {
				x: 0,
				y: 0,
				duration: returnDuration,
				ease: returnEase,
				onComplete: () => {
					isMagneticActive.current = false;
					setMagneticRadiusX(initialRadiusX);
					setMagneticRadiusY(initialRadiusY);
				},
			});
		},
		[returnDuration, returnEase, initialRadiusX, initialRadiusY]
	);

	const handleMouseEnter = useCallback(
		(e) => {
			if (!enabled) return;
			isMagneticActive.current = true;
			const currentEl = magnetRef.current;
			if (!currentEl) return;

			const rect = currentEl.getBoundingClientRect();
			const { distance, distanceX, distanceY } = calculateDistance(
				e,
				rect
			);

			if (distance < 1) {
				setMagneticRadiusX(hoverRadiusX);
				setMagneticRadiusY(hoverRadiusY);

				const magnetStrength =
					Math.pow(1 - distance, 2) * magnetMultiplier;

				if (animationRef.current) {
					animationRef.current.kill();
				}

				animationRef.current = gsap.to(currentEl, {
					x: distanceX * magnetStrength,
					y: distanceY * magnetStrength,
					duration: moveDuration,
					ease: moveEase,
				});
			}
		},
		[
			enabled,
			magnetMultiplier,
			hoverRadiusX,
			hoverRadiusY,
			moveDuration,
			moveEase,
			calculateDistance,
		]
	);

	const handleMouseLeave = useCallback(() => {
		if (!enabled) return;
		const currentEl = magnetRef.current;
		if (!currentEl) return;

		const rect = currentEl.getBoundingClientRect();
		const { distance } = calculateDistance(
			{ clientX: event.clientX, clientY: event.clientY },
			rect
		);

		if (distance >= 1) {
			returnToInitialPosition(currentEl);
		}
	}, [enabled, calculateDistance, returnToInitialPosition]);

	const handleMouseMove = useCallback(
		(e) => {
			if (!enabled || !isMagneticActive.current) return;

			const currentEl = magnetRef.current;
			if (!currentEl) return;

			const rect = currentEl.getBoundingClientRect();
			const { distance, distanceX, distanceY } = calculateDistance(
				e,
				rect
			);

			if (distance < 1) {
				setMagneticRadiusX(hoverRadiusX);
				setMagneticRadiusY(hoverRadiusY);

				const magnetStrength =
					Math.pow(1 - distance, 2) * magnetMultiplier;

				if (animationRef.current) {
					animationRef.current.kill();
				}

				animationRef.current = gsap.to(currentEl, {
					x: distanceX * magnetStrength,
					y: distanceY * magnetStrength,
					duration: moveDuration,
					ease: moveEase,
				});
			} else {
				returnToInitialPosition(currentEl);
			}
		},
		[
			enabled,
			magnetMultiplier,
			hoverRadiusX,
			hoverRadiusY,
			moveDuration,
			moveEase,
			returnEase,
			calculateDistance,
			returnToInitialPosition,
		]
	);

	useEffect(() => {
		if (!enabled) return;

		const currentEl = magnetRef.current;
		if (!currentEl) return;

		currentEl.addEventListener("mouseenter", handleMouseEnter);
		window.addEventListener("mousemove", handleMouseMove);
		currentEl.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			currentEl.removeEventListener("mouseenter", handleMouseEnter);
			window.removeEventListener("mousemove", handleMouseMove);
			currentEl.removeEventListener("mouseleave", handleMouseLeave);
			if (animationRef.current) {
				animationRef.current.kill();
			}
			if (returnAnimationRef.current) {
				returnAnimationRef.current.kill();
			}
		};
	}, [enabled, handleMouseEnter, handleMouseMove, handleMouseLeave]);

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
	initialRadiusX: PropTypes.number,
	initialRadiusY: PropTypes.number,
	hoverRadiusX: PropTypes.number,
	hoverRadiusY: PropTypes.number,
	moveDuration: PropTypes.number,
	returnDuration: PropTypes.number,
	moveEase: PropTypes.string,
	returnEase: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
};

export default MagneticProvider;
