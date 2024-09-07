import { useEffect } from "react";
import { gsap } from "gsap";

const useParticleAnimation = ({ containerRef, particles }) => {
	useEffect(() => {
		const container = containerRef.current; // Контейнер для анимации
		const containerHeight = container.clientHeight; // Высота контейнера
		const containerWidth = container.clientWidth; // Ширина контейнера

		particles.forEach(({ ref, startXPercent, speed, rotateZ }) => {
			const particle = ref.current;

			// Расчет позиции по оси X в пикселях на основе процента
			const startX = (startXPercent / 100) * containerWidth;

			// Устанавливаем начальное положение партикла внизу контейнера
			gsap.set(particle, {
				x: startX, // Позиция по оси X на основе процента от ширины контейнера
				y: containerHeight, // Начальная позиция по оси Y - внизу контейнера
				scale: 1, // Начальный масштаб
			});

			// Анимация полета вверх с плавным масштабированием
			gsap.to(particle, {
				opacity: 0,
				rotateZ: rotateZ,
				y: -100, // Лететь вверх за пределы контейнера
				duration: containerHeight / speed, // Длительность анимации зависит от высоты контейнера и скорости
				repeat: -1, // Бесконечное повторение
				ease: "linear", // Плавное сглаживание анимации
				onComplete: () => {
					// Вернуть обратно вниз и восстановить масштаб
					gsap.set(particle, { y: containerHeight, scale: 1 });
				},
			});
		});

		// Очистка анимации при размонтировании компонента
		return () => {
			particles.forEach(({ ref }) => {
				gsap.killTweensOf(ref.current); // Удаляем анимацию
			});
		};
	}, [containerRef, particles]); // Добавляем зависимости
};

export default useParticleAnimation; // Экспорт хука
