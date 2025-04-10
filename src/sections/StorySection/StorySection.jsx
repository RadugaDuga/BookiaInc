import styles from "./StorySection.module.css";
import { Youtube } from "../../assets/optimized";
import useParticleAnimation from "../../hooks/UseParticles/useParticles";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function StorySection() {
	const { t } = useTranslation();
	const containerRef = useRef(null); // Реф для контейнера
	const youtubeS = useRef(null);
	const youtubeSx2 = useRef(null);
	const youtubeM = useRef(null);
	const youtubeL = useRef(null);

	useParticleAnimation({
		containerRef, // Передаем реф контейнера
		particles: [
			{ ref: youtubeS, startXPercent: 10, speed: 60, rotateZ: 100 }, // Положение по X в процентах и скорость для первой частицы
			{ ref: youtubeSx2, startXPercent: 90, speed: 40, rotateZ: -100 }, // Положение по X в процентах и скорость для первой частицы
			{ ref: youtubeM, startXPercent: 20, speed: 100, rotateZ: -150 }, // Положение по X в процентах и скорость для второй частицы
			{ ref: youtubeL, startXPercent: 80, speed: 150, rotateZ: 200 }, // Положение по X в процентах и скорость для третьей частицы
		],
	});

	return (
		<section
			className={styles.container}
			id="story-section"
			ref={containerRef}
		>
			{/* Партиклы */}
			<div className={styles.youtubeS} ref={youtubeS} />
			<div className={styles.youtubeM} ref={youtubeM} />
			<div className={styles.youtubeL} ref={youtubeL} />
			<div className={styles.youtubeS} ref={youtubeSx2} />
			{/* Партиклы */}

			<div className={styles.content}>
				<div className={styles.image}></div>

				<div className={styles.text}>
					<h1 className={styles.title}>{t("story.title")}</h1>
					<p>{t("story.description")}</p>
				</div>
			</div>
		</section>
	);
}

export default StorySection;
