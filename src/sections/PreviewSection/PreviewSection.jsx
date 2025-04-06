import { useEffect, useRef } from "react";
import styles from "./PreviewSection.module.css";
import MagneticGSAProvider from "../../providers/MagneticProvider";
import { AnimatedMaskot, Avatar } from "../../assets/optimized";
import CircularTextButton from "../../components/CircularTextButton";
import { useTranslation } from "react-i18next";
import SideBar from "../SideBar/SideBar";
import StackElements from "../../components/StackElements/StackElements";

function PreviewSection() {
	const { t } = useTranslation();
	const videoRef = useRef(null);

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};

	useEffect(() => {
		videoRef.current.play();
	}, []);

	const stackEls = ["React", "Effector", "Typescript", "Vite"];

	return (
		<section className={styles.wrapper} id="preview-section">
			<div className={styles.text_container}>
				<SideBar />
				<div className={styles.content}>
					<h1 className={styles.title}>{t("preview.title")}</h1>

					<span className={styles.author_link}>
						<img src={Avatar} alt="Avatar" />
						{t("preview.role")}
					</span>

					<div className={styles.text}>
						{t("preview.description")}

						<StackElements string="React, Effector, Typescript, Vite" />
					</div>

					<MagneticGSAProvider>
						<CircularTextButton text={t("preview.cta")} />
					</MagneticGSAProvider>
				</div>
			</div>

			<div
				className={styles.video_container}
				onMouseEnter={handleMouseEnter}
			>
				<video
					ref={videoRef}
					src={AnimatedMaskot}
					muted
					className={styles.video}
				></video>
			</div>
		</section>
	);
}

export default PreviewSection;
