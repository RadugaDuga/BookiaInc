import { useEffect, useRef } from "react";
import styles from "./PreviewSection.module.css";
import MagneticGSAProvider from "../../MagneticProvider";
import { AnimatedMaskot, Avatar } from "../../assets/optimized";
import CircularTextButton from "../../components/CircularTextButton";

function PreviewSection() {
	const videoRef = useRef(null);

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
				<div className={styles.content}>
					<h1 className={styles.title}>
						Bukia Georgi <br />
						Spartakovich
					</h1>

					<span className={styles.author_link}>
						<img src={Avatar} alt="Avatar" />
						Frontend Developer
					</span>

					<p className={styles.text}>
						My main programming language is js. In my work, I use
						<b>React</b> in conjunction with a state manager -
						<b>Redux</b>
					</p>

					<MagneticGSAProvider>
						<CircularTextButton text={"Telegram Link"} />
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
