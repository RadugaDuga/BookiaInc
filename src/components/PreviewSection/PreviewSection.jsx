import { useEffect, useRef } from "react";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import styles from "./PreviewSection.module.css";
import CircularTextButton from "./CircularTextButton";
import MagneticGSAProvider from "../../MagneticGSAProvider";
import { AnimatedMaskot, Avatar } from "../../assets/optimized";

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

					<a
						href="https://twitter.com/Bukija"
						target="blank_"
						className={styles.author_link}
					>
						<img src={Avatar} alt="" />
						Frontend Developer
						<TwitterIcon />
					</a>

					<p className={styles.text}>
						My main programming language is js. In my work, I use{" "}
						<b>React</b> in conjunction with a state manager -{" "}
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
