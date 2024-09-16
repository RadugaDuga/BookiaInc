import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import styles from "./TickerSection.module.css";

const InfiniteScroll = ({
	items,
	speed = 1,
	paddingRight = 0,
	reversed = false,
	repeat = -1,
	paused = false,
}) => {
	const containerRef = useRef(null);
	const [duplicatedItems, setDuplicatedItems] = useState([]);

	useEffect(() => {
		if (!containerRef.current || items.length === 0) return; // Проверяем, есть ли элементы

		// Дублирование элементов до тех пор, пока ширина не заполнится
		const fillItemsToScreenWidth = () => {
			const containerWidth = containerRef.current.offsetWidth;
			let contentWidth = 0;
			let newItems = [...items]; // Создаем копию оригинального массива

			// Создаем временный элемент для измерения ширины контента
			const tempContainer = document.createElement("div");
			tempContainer.style.display = "inline-block";
			tempContainer.style.visibility = "hidden";
			tempContainer.style.position = "absolute";
			tempContainer.style.whiteSpace = "nowrap";

			document.body.appendChild(tempContainer);

			// Заполняем временный контейнер элементами
			newItems.forEach((item) => {
				const tempItem = document.createElement("div");
				tempItem.className = styles.item;
				tempItem.innerHTML = item;
				tempContainer.appendChild(tempItem);
			});

			contentWidth = tempContainer.offsetWidth;

			// Дублируем элементы, пока ширина контента не станет больше ширины контейнера
			while (contentWidth < containerWidth * 2) {
				newItems = [...newItems, ...items];
				newItems.forEach((item) => {
					const tempItem = document.createElement("div");
					tempItem.className = styles.item;
					tempItem.innerHTML = item;
					tempContainer.appendChild(tempItem);
				});
				contentWidth = tempContainer.offsetWidth;
			}

			document.body.removeChild(tempContainer); // Удаляем временный контейнер
			setDuplicatedItems(newItems);
		};

		fillItemsToScreenWidth();
	}, [items]);

	useEffect(() => {
		if (!containerRef.current || duplicatedItems.length === 0) return; // Проверяем, есть ли дублированные элементы

		const horizontalLoop = (items, config) => {
			items = gsap.utils.toArray(items);
			if (items.length === 0) return; // Проверяем, есть ли элементы после преобразования в массив
			config = config || {};

			let tl = gsap.timeline({
					repeat: config.repeat,
					paused: config.paused,
					defaults: { ease: "none" },
					onReverseComplete: () =>
						tl.totalTime(tl.rawTime() + tl.duration() * 100),
				}),
				length = items.length,
				startX = items[0].offsetLeft,
				times = [],
				widths = [],
				xPercents = [],
				pixelsPerSecond = (config.speed || 1) * 100,
				snap =
					config.snap === false
						? (v) => v
						: gsap.utils.snap(config.snap || 1),
				totalWidth,
				curX,
				distanceToStart,
				distanceToLoop,
				item,
				i;

			gsap.set(items, {
				xPercent: (i, el) => {
					let w = (widths[i] = parseFloat(
						gsap.getProperty(el, "width", "px")
					));
					xPercents[i] = snap(
						(parseFloat(gsap.getProperty(el, "x", "px")) / w) *
							100 +
							gsap.getProperty(el, "xPercent")
					);
					return xPercents[i];
				},
			});

			gsap.set(items, { x: 0 });
			totalWidth =
				items[length - 1].offsetLeft +
				(xPercents[length - 1] / 100) * widths[length - 1] -
				startX +
				items[length - 1].offsetWidth *
					gsap.getProperty(items[length - 1], "scaleX") +
				(parseFloat(config.paddingRight) || 0);

			for (i = 0; i < length; i++) {
				item = items[i];
				curX = (xPercents[i] / 100) * widths[i];
				distanceToStart = item.offsetLeft + curX - startX;
				distanceToLoop =
					distanceToStart +
					widths[i] * gsap.getProperty(item, "scaleX");
				tl.to(
					item,
					{
						xPercent: snap(
							((curX - distanceToLoop) / widths[i]) * 100
						),
						duration: distanceToLoop / pixelsPerSecond,
					},
					0
				)
					.fromTo(
						item,
						{
							xPercent: snap(
								((curX - distanceToLoop + totalWidth) /
									widths[i]) *
									100
							),
						},
						{
							xPercent: xPercents[i],
							duration:
								(curX - distanceToLoop + totalWidth - curX) /
								pixelsPerSecond,
							immediateRender: false,
						},
						distanceToLoop / pixelsPerSecond
					)
					.add("label" + i, distanceToStart / pixelsPerSecond);
				times[i] = distanceToStart / pixelsPerSecond;
			}

			tl.progress(1, true).progress(0, true); // pre-render for performance

			if (config.reversed) {
				tl.vars.onReverseComplete();
				tl.reverse();
			}

			return tl;
		};

		const loopTimeline = horizontalLoop(containerRef.current.children, {
			speed,
			paddingRight,
			reversed,
			repeat,
			paused,
		});

		return () => {
			loopTimeline && loopTimeline.kill(); // Добавляем проверку на существование loopTimeline
		};
	}, [duplicatedItems, speed, paddingRight, reversed, repeat, paused]);

	return (
		<div
			className="infinite-scroll-container"
			style={{ overflow: "hidden", whiteSpace: "nowrap" }}
			ref={containerRef}
		>
			{duplicatedItems.map((item, index) => (
				<div key={index} className={styles.item}>
					{item}
				</div>
			))}
		</div>
	);
};

InfiniteScroll.propTypes = {
	items: PropTypes.arrayOf(PropTypes.node).isRequired,
	speed: PropTypes.number,
	paddingRight: PropTypes.number,
	reversed: PropTypes.bool,
	repeat: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	paused: PropTypes.bool,
};

export default InfiniteScroll;
