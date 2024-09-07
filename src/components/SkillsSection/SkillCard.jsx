import styles from "./SkillSection.module.css";
import { PropTypes } from "prop-types";

function SkillCard({
	list,
	position,
	text,
	skill,
	orderNumber,
	imgSrc,
	textColor,
}) {
	return (
		<div
			className={styles.card}
			style={{ "--textColor": `${textColor}` }}
		>
			<div className={styles.card_header}>
				<div className={styles.description}>
					<h2>{orderNumber}</h2>
					<h1>{skill}</h1>
					<p>{text}</p>
				</div>
				<div className={styles.image}>
					<img src={imgSrc} alt="" />
				</div>
			</div>
			<ul>
				{list.map((text, index) => {
					const globalNumber = position + index;
					const localNumber =
						index < 10 ? `0${index + 1}` : `${index + 1}`;
					return (
						<li key={text}>
							<span className={styles.marker}>
								{globalNumber}
							</span>
							<span>{text}</span>
							<span>{localNumber}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

SkillCard.propTypes = {
	list: PropTypes.array,
	text: PropTypes.string,
	position: PropTypes.number,
	skill: PropTypes.string,
	orderNumber: PropTypes.string,
	imgSrc: PropTypes.string,
	textColor: PropTypes.string,
};

export default SkillCard;
