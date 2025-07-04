import { useEffect, useRef } from "react";
import {
	LocomotiveScrollProvider,
	useLocomotiveScroll,
} from "react-locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

// Функция debounce для отслеживания остановки прокрутки
const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			func(...args);
		}, delay);
	};
};



const SkewAnimation = () => {
	const { scroll } = useLocomotiveScroll(); // Получаем доступ к экземпляру скролла
	const isMobile = useMediaQuery({ maxWidth: 750 }); // Проверяем мобильное устройство

	useEffect(() => {
		if (!scroll || isMobile) return; // Отключаем skew эффект на мобильных устройствах

		// Настраиваем ScrollTrigger с использованием scrollerProxy
		ScrollTrigger.scrollerProxy(scroll.el, {
			scrollTop(value) {
				return arguments.length
					? scroll.scrollTo(value, 0, 0)
					: scroll.scroll.instance.scroll.y;
			},
			getBoundingClientRect: () => ({
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			}),
		});

		// Анимация skew
		const skewSetter = gsap.quickSetter(".section", "skewY", "deg");
		const proxy = { skew: 0 };

		// Проверяем наличие элементов с классом section
		const sections = document.querySelectorAll(".section");
		if (!sections.length) {
			console.warn('No elements with class "section" found');
			return;
		}

		// Функция для плавного округления skew к целому числу после остановки прокрутки
		const roundSkew = debounce(() => {
			gsap.to(proxy, {
				skew: Math.round(proxy.skew),
				duration: 0.3,
				ease: "power3",
				onUpdate: () => skewSetter(proxy.skew),
			});
		}, 90); // Задержка в 90 мс перед округлением

		const skewAnimation = ScrollTrigger.create({
			scroller: scroll.el,
			trigger: scroll.el,
			force3D: true, // Включает аппаратное ускорение
			onUpdate: (self) => {
				const velocity = self.getVelocity();
				const skewTarget = -(velocity / 800);

				// Плавная анимация skew во время прокрутки
				gsap.to(proxy, {
					skew: skewTarget,
					duration: 0.2,
					ease: "power3",
					overwrite: true,
					onUpdate: () => skewSetter(proxy.skew),
				});

				// Запускаем дебаунс-функцию для округления skew после остановки прокрутки
				if (Math.abs(velocity) < 10) {
					// Проверяем, что скорость почти остановилась
					roundSkew();
				}
			},
		});

		scroll.on("scroll", ScrollTrigger.update);
		ScrollTrigger.addEventListener("refresh", () => scroll.update());
		return () => {
			skewAnimation.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [scroll, isMobile]);

	return null;
};

const LocomotiveProvider = ({ children }) => {
	const containerRef = useRef(null);
	const isMobile = useMediaQuery({ maxWidth: 750 }); // Проверяем мобильное устройство

	// На мобильных устройствах возвращаем обычный div без locomotive scroll
	if (isMobile) {
		return (
			<main id="loco-mobile" ref={containerRef}>
				{children}
			</main>
		);
	}

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				lerp: 0.04,
				getDirection: true,
				smoothMobile: false,
				scrollFromAnywhere: false,
			}}
			watch={[]}
			containerRef={containerRef}
		>
			<SkewAnimation />

			<main id="loco" data-scroll-container ref={containerRef}>
				{children}
			</main>
		</LocomotiveScrollProvider>
	);
};

LocomotiveProvider.propTypes = {
	children: PropTypes.node,
};

export default LocomotiveProvider;
