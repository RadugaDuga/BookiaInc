import { Evraz, OneTwoTrip, TwoGis } from "../../assets/icons";
import SkillCard from "./SkillCard";
import styles from "./SkillSection.module.css";
import { useTranslation } from "react-i18next";
import { memo } from "react";

const MemoizedSkillCard = memo(SkillCard);

function SkillsSection() {
	const { t } = useTranslation();

	return (
		<section className={styles["skills-section"]} id="skills-section">
			<div className={styles["skills-section__content"]}>
				<div
					className={`${styles["skills-section__column-1"]} ${styles["skills-section__desktop"]}`}
				>
					<div
						className={`${styles["skill-card"]} ${styles["skill-card--intro"]}`}
					>
						<h1
							className={
								(styles["skill-card__title"],
								styles["skill-card__title--main"])
							}
						>
							{t("skills.experience")}
						</h1>
						<p className={styles["skill-card__text"]}>
							{t("skills.experienceDescription")}
						</p>
					</div>

						<MemoizedSkillCard
						skill="OneTwoTrip!"
						experienceData={{
							role: t("skills.OneTwoTrip.role"),
							period: t("skills.OneTwoTrip.period"),
							stack: t("skills.OneTwoTrip.stack"),
							projects: t("skills.OneTwoTrip.projects"),
							achievements: t("skills.OneTwoTrip.achievements"),
							responsibilities: t(
								"skills.OneTwoTrip.responsibilities"
							),
						}}
						imgSrc={<OneTwoTrip />}
						textColor={"#92C4FF"}
					/>
				</div>
				<div
					className={`${styles["skills-section__column-2"]} ${styles["skills-section__desktop"]}`}
				>
						<MemoizedSkillCard
						skill="EvrazTech"
						experienceData={{
							role: t("skills.Evraz.role"),
							period: t("skills.Evraz.period"),
							stack: t("skills.Evraz.stack"),
							projects: t("skills.Evraz.projects"),
							achievements: t("skills.Evraz.achievements"),
							responsibilities: t(
								"skills.Evraz.responsibilities"
							),
						}}
						imgSrc={<Evraz />}
						textColor={"#EF7622"}
						/>

						<MemoizedSkillCard
						skill="2GIS"
						experienceData={{
							role: t("skills.TwoGis.role"),
							period: t("skills.TwoGis.period"),
							stack: t("skills.TwoGis.stack"),
							projects: t("skills.TwoGis.projects"),
							achievements: t("skills.TwoGis.achievements"),
							responsibilities: t(
								"skills.TwoGis.responsibilities"
							),
						}}
						imgSrc={<TwoGis />}
						textColor={"#82D714"}
					/>
				</div>

				<div
					className={`${styles["skills-section__column-1"]} ${styles["skills-section__mobile"]}`}
				>
					<div
						className={`${styles["skill-card"]} ${styles["skill-card--intro"]}`}
					>
						<h1
							className={
								(styles["skill-card__title"],
								styles["skill-card__title--main"])
							}
						>
							{t("skills.experience")}
						</h1>
						<p className={styles["skill-card__text"]}>
							{t("skills.experienceDescription")}
						</p>
					</div>
						<MemoizedSkillCard
						skill="EvrazTech"
						experienceData={{
							role: t("skills.Evraz.role"),
							period: t("skills.Evraz.period"),
							stack: t("skills.Evraz.stack"),
							projects: t("skills.Evraz.projects"),
							achievements: t("skills.Evraz.achievements"),
							responsibilities: t(
								"skills.Evraz.responsibilities"
							),
						}}
						imgSrc={<Evraz />}
						textColor={"#EF7622"}
					/>
				</div>
				<div
					className={`${styles["skills-section__column-2"]} ${styles["skills-section__mobile"]}`}
				>
						<MemoizedSkillCard
						skill="OneTwoTrip!"
						experienceData={{
							role: t("skills.OneTwoTrip.role"),
							period: t("skills.OneTwoTrip.period"),
							stack: t("skills.OneTwoTrip.stack"),
							projects: t("skills.OneTwoTrip.projects"),
							achievements: t("skills.OneTwoTrip.achievements"),
							responsibilities: t(
								"skills.OneTwoTrip.responsibilities"
							),
						}}
						imgSrc={<OneTwoTrip />}
						textColor={"#92C4FF"}
					/>
						<MemoizedSkillCard
						skill="2GIS"
						experienceData={{
							role: t("skills.TwoGis.role"),
							period: t("skills.TwoGis.period"),
							stack: t("skills.TwoGis.stack"),
							projects: t("skills.TwoGis.projects"),
							achievements: t("skills.TwoGis.achievements"),
							responsibilities: t(
								"skills.TwoGis.responsibilities"
							),
						}}
						imgSrc={<TwoGis />}
						textColor={"#82D714"}
					/>
				</div>
			</div>
		</section>
	);
}

export default SkillsSection;
