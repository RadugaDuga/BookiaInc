import { useEffect, useRef, useState } from "react";
import { AnimatedMaskot, Avatar } from "../../assets/optimized";
import CircularTextButton from "../../components/CircularTextButton";
import { useTranslation } from "react-i18next";
import StackElements from "../../components/StackElements/StackElements";
import { QrCode } from "../../assets/icons";
import WithFadeIn from "../../components/WithFadeIn";
import styles from "./PreviewSectionMobile.module.css";
import SideBarMobile from "../SideBarMobile/SideBarMobile";

export default function PreviewSectionMobile() {
	const { t } = useTranslation();
	const videoRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};
	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause();
		}
	};

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play();
			videoRef.current.playbackRate = 2;
		}
	}, []);

	return (
		<section className={styles.wrapper} id="preview-section">
			<div className={styles.text_container}>
				<SideBarMobile />

				<div className={styles.content} style={{ minHeight: 1 }}>
					<WithFadeIn>
						<h1
							className={
								isHovered ? styles.titleHovered : styles.title
							}
						>
							{t("preview.title")} 
						</h1>
					</WithFadeIn>

					<WithFadeIn>
						<span className={styles.author_link}>
							<img src={Avatar} alt="Avatar" />
							{t("preview.role")}
						</span>
					</WithFadeIn>

					<WithFadeIn>
						<div className={styles.text}>
							{t("preview.description")}

							<StackElements string="React, Effector, Typescript, Vite" />
						</div>
					</WithFadeIn>

					<WithFadeIn>
						<div className={styles.buttonAndQr}>
							<span
								onMouseEnter={() => {
									setIsHovered(true);
								}}
								onMouseLeave={() => {
									setIsHovered(false);
								}}
								className={styles.button__span}
							>
								<CircularTextButton text={t("preview.cta")} />
							</span>
							<span className={styles.qrCode__wrapper}>
								<span className={styles.qrCode}>
									<QrCode />
								</span>
							</span>
						</div>
					</WithFadeIn>
				</div>
			</div>

			<div
				className={styles.video_container}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<video
					ref={videoRef}
					src={AnimatedMaskot}
					muted
					className={styles.video}
					aria-label="Animated mascot"
					role="presentation"
				></video>
			</div>
		</section>
	);
}
