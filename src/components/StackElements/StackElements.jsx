import styles from "./StackElements.module.css";

const StackElements = ({ string }) => {
	const list = string.split(",");

	return (
		<span className={styles.stackElements}>
			{list.map((text, index) => {
				return (
					<span key={index} className={styles.stackEl}>
						{text}
					</span>
				);
			})}
		</span>
	);
};

export default StackElements;
