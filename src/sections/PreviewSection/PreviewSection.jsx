import { useEffect, useRef, useState } from "react";
import styles from "./PreviewSection.module.css";
import { AnimatedMaskot, Avatar } from "../../assets/optimized";
import CircularTextButton from "../../components/CircularTextButton";
import { useTranslation } from "react-i18next";
import SideBar from "../SideBar/SideBar";
import StackElements from "../../components/StackElements/StackElements";
import { QrCode } from "../../assets/icons";

function PreviewSection() {
	const { t } = useTranslation();
	const videoRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};

	useEffect(() => {
		videoRef.current.play();
	}, []);

	return (
		<section className={styles.wrapper} id="preview-section">
			<div className={styles.text_container}>
				<SideBar />
				<div className={styles.content}>
					<h1
						className={
							isHovered ? styles.titleHovered : styles.title
						}
					>
						{t("preview.title")}
					</h1>

					<span className={styles.author_link}>
						<img src={Avatar} alt="Avatar" />
						{t("preview.role")}
					</span>

					<div className={styles.text}>
						{t("preview.description")}

						<StackElements string="React, Effector, Typescript, Vite" />
					</div>

					<div className={styles.buttonAndQr}>
						<span
							onMouseEnter={() => {
								setIsHovered(true);
							}}
							onMouseLeave={() => {
								setIsHovered(false);
							}}
						>
							<CircularTextButton text={t("preview.cta")} />
						</span>
						<span className={styles.qrCode__wrapper}>
							<span className={styles.qrCode}>
								<QrCode />
							</span>
						</span>
					</div>
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
