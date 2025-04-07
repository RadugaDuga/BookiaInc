import styles from "./SkillSection.module.css";
import { PropTypes } from "prop-types";
import StackElements from "../../components/StackElements/StackElements";
function SkillCard({
	skill,
	imgSrc,
	textColor,
	experienceData,
}) {
	return (
		<div
			className={styles["skill-card"]}
			style={{ "--textColor": `${textColor}` }}
		>
			<div className={styles["skill-card__gradient-before"]}></div>
			<div className={styles["skill-card__gradient-after"]}></div>
			<div className={styles["skill-card__header"]}>
				<div className={styles["skill-card__description"]}>
					<h1 className={styles["skill-card__title"]}>{skill}</h1>
					<div className={styles["skill-card__role-period"]}>
						<h3 className={styles["skill-card__role"]}>
							{experienceData.role}
						</h3>
						<span className={styles["skill-card__period"]}>
							{experienceData.period}
						</span>
					</div>
				</div>
				<div className={styles["skill-card__image"]}>
					{typeof imgSrc === "string" ? (
						<img src={imgSrc} alt="Object Img" />
					) : (
						imgSrc
					)}
				</div>
			</div>

			<div className={styles["skill-card__experience-content"]}>
				{experienceData.stack && (
					<div className={styles["skill-card__section"]}>
						<h4 className={styles["skill-card__section-title"]}>
							Стек
						</h4>
						<p className={styles["skill-card__section-text"]}>
							<StackElements string={experienceData.stack} />
						</p>
					</div>
				)}

				{experienceData.projects && (
					<div className={styles["skill-card__section"]}>
						<h4 className={styles["skill-card__section-title"]}>
							Проекты
						</h4>
						<p className={styles["skill-card__section-text"]}>
							{experienceData.projects}
						</p>
					</div>
				)}

				{experienceData.responsibilities && (
					<div className={styles["skill-card__section"]}>
						<h4 className={styles["skill-card__section-title"]}>
							Роль
						</h4>
						<p className={styles["skill-card__section-text"]}>
							{experienceData.responsibilities}
						</p>
					</div>
				)}

				{experienceData.achievements && (
					<div className={styles["skill-card__section"]}>
						<h4 className={styles["skill-card__section-title"]}>
							Основные достижения
						</h4>
						<p className={styles["skill-card__section-text"]}>
							{experienceData.achievements}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

SkillCard.propTypes = {
	list: PropTypes.array,
	text: PropTypes.string,
	position: PropTypes.number,
	skill: PropTypes.string,
	orderNumber: PropTypes.string,
	imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	textColor: PropTypes.string,
	experienceData: PropTypes.shape({
		role: PropTypes.string,
		period: PropTypes.string,
		stack: PropTypes.string,
		projects: PropTypes.string,
		achievements: PropTypes.string,
		responsibilities: PropTypes.string,
	}),
};

export default SkillCard;
