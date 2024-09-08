import styles from "./CircularTextButton.module.css";
import { PropTypes } from "prop-types";

function CircularTextButton({ text }) {
	return (
		<a href="https://t.me/iBukia" target="_blank" className={styles.button}>
			<div
				className={styles.button_text}
				style={{ "--btn-text": `"${text}"` }}
			>
				{text}
			</div>
		</a>
	);
}

CircularTextButton.propTypes = {
	text: PropTypes.string,
};

export default CircularTextButton;
