import styles from "./StorySectionMobile.module.css";
import useParticles from "../../hooks/UseParticles/useParticles";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import WithFadeIn from "../../components/WithFadeIn";

export default function StorySectionMobile() {
	const containerRef = useRef(null);

	const particles = useParticles({
		containerRef,
		count: 18,
		minSize: 30,
		maxSize: 35,
		minX: 5,
		maxX: 95,
		minY: 105,
		maxY: 200,
	});

	return (
		<section
			className={styles.container}
			id="story-section"
			ref={containerRef}
		>
			{particles.map((p, i) => (
				<div
					key={i}
					className={styles.youtubeS}
					ref={p.ref}
					style={{
						width: p.size,
						height: p.size,
						transform: `rotate(${p.initialRotate}deg)`,
					}}
				/>
			))}

			<StoryContent />
		</section>
	);
}

function StoryContent() {
	const { t } = useTranslation();
	return (
		<div className={styles.content}>
			<div className={styles.image_container}>
				<WithFadeIn offset={20} direction="right">
					<div className={styles.image}></div>
				</WithFadeIn>
			</div>
			<div className={styles.text}>
				<WithFadeIn>
					<h1 className={styles.title}>{t("story.title")}</h1>
				</WithFadeIn>
				<WithFadeIn>
					<p>{t("story.description")}</p>
				</WithFadeIn>
			</div>
		</div>
	);
}
