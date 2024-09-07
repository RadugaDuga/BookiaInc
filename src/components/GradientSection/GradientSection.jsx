import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./GradientSection.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll"; // Импортируем useLocomotiveScroll из библиотеки

gsap.registerPlugin(ScrollTrigger);

function GradientSection() {
	const shape1 = useRef(null);
	const shape2 = useRef(null);
	const shape3 = useRef(null);
	const textRef = useRef(null);
	const text1 = useRef(null);
	const text2 = useRef(null);
	const text3 = useRef(null);

	const { scroll } = useLocomotiveScroll(); // Получаем scroll из контекста

	useEffect(() => {
		// Обработчик движения мыши
		const handleMouseMove = (e) => {
			const { clientX: x, clientY: y } = e;

			[shape1, shape2, shape3].forEach((shape, index) => {
				gsap.to(shape.current, {
					x,
					y,
					duration: 0.9 - index * 0.3,
					ease: "power3.out",
				});
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useEffect(() => {
		if (!scroll) return; // Проверяем, что экземпляр скролла доступен

		const textAnimations = [
			{
				ref: text3,
				textContent: "JAVASCRIPT",
				start: "50% center",
				end: "70% center",
			},
			{
				ref: text2,
				textContent: "EFFECTOR",
				start: "40% center",
				end: "80% center",
			},
		];

		textAnimations.forEach(({ ref, textContent, start, end }) => {
			ScrollTrigger.create({
				trigger: textRef.current,
				scroller: scroll.el,
				start: start,
				end: end,
				scrub: true,
				// markers: true,
				animation: gsap.to(ref.current, {
					duration: 1,
					textContent: textContent,
					ease: "none",
					repeat: 1,
					yoyo: true,
				}),
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [scroll]);

	return (
		<section className={styles.container} id="gradient-section">
			<div className={styles.content}>
				<div className={styles.text_box} ref={textRef}>
					<h3 ref={text1}>REACT</h3>
					<h3 ref={text2}>REDUX</h3>
					<h3 ref={text3}>TYPESCRIPT</h3>
				</div>
				<div className={styles.shapes}>
					<div className={styles.shape_1} ref={shape1}></div>
					<div className={styles.shape_2} ref={shape2}></div>
					<div className={styles.shape_3} ref={shape3}></div>
				</div>
			</div>
		</section>
	);
}

export default GradientSection;
