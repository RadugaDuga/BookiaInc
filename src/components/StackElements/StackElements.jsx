import styles from "./StackElements.module.css";

const StackElements = ({ string }) => {
	const list = string.split(",");

	return (
		<div className={styles.stackElements}>
			{list.map((text, index) => {
				return (
					<span key={index} className={styles.stackEl}>
						{text}
					</span>
				);
			})}
		</div>
	);
};

export default StackElements;
