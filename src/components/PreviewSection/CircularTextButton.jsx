import styles from "./CircularTextButton.module.css";
import { PropTypes } from "prop-types";

function CircularTextButton({ text }) {
    return (
        <button className={styles.button}>
            <a href="https://t.me/iBukia" target="_blank">
                <div
                    className={styles.button_text}
                    style={{ "--btn-text": `"${text}"` }}
                >
                    {text}
                </div>
            </a>
        </button>
    );
}

CircularTextButton.propTypes = {
    text: PropTypes.string,
};

export default CircularTextButton;
