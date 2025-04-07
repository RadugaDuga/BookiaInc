import { Evraz, OneTwoTrip, TwoGis } from "../../assets/icons";
import SkillCard from "./SkillCard";
import styles from "./SkillSection.module.css";
import { useTranslation } from "react-i18next";

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
						<h1 className={styles["skill-card__title"]}>
							{t("skills.experience")}
						</h1>
						<p className={styles["skill-card__text"]}>
							{t("skills.experienceDescription")}
						</p>
					</div>

					<SkillCard
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
					<SkillCard
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

					<SkillCard
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

				{/* <div className={`${styles['skills-section__column-1']} ${styles['skills-section__mobile']}`}>
					<div className={`${styles['skill-card']} ${styles['skill-card--intro']}`}>
						<h1 className={styles['skill-card__title']}>{t("skills.experience")}</h1>
						<p className={styles['skill-card__text']}>{t("skills.experienceDescription")}</p>
					</div>
					<SkillCard
						orderNumber="01"
						skill="Evraz"
						experienceData={{
							role: t("skills.Evraz.role"),
							period: t("skills.Evraz.period"),
							stack: t("skills.Evraz.stack"),
							projects: t("skills.Evraz.projects"),
							achievements: t("skills.Evraz.achievements"),
							responsibilities: t("skills.Evraz.responsibilities")
						}}
						position={1}
						imgSrc={JsInFlask}
						textColor={"#FFDB76"}
					/>
					<SkillCard
						orderNumber="02"
						skill={t("skills.react")}
						list={[
							t("skills.reactTopics.introducingJSX"),
							t("skills.reactTopics.componentsAndProps"),
							t("skills.reactTopics.stateAndLifecycles"),
							t("skills.reactTopics.conditionalRendering"),
							t("skills.reactTopics.formsListsAndKeys"),
							t("skills.reactTopics.context"),
							t("skills.reactTopics.higherOrderComponents"),
							t("skills.reactTopics.hooks"),
							t("skills.reactTopics.virtualDOM"),
						]}
						position={12}
						text={t("skills.reactDescription")}
						imgSrc={ReactInFlask}
						textColor={"#44BFE5"}
					/>
				</div>
				<div className={`${styles['skills-section__column-2']} ${styles['skills-section__mobile']}`}>
					<SkillCard
						orderNumber="03"
						skill={t("skills.redux")}
						list={[
							t("skills.reduxTopics.actions"),
							t("skills.reduxTopics.reducers"),
							t("skills.reduxTopics.store"),
							t("skills.reduxTopics.dataFlow"),
							t("skills.reduxTopics.dispatch"),
							t("skills.reduxTopics.reduxThunk"),
							t("skills.reduxTopics.reduxForm"),
							t("skills.reduxTopics.reduxToolkit"),
						]}
						text={t("skills.reduxDescription")}
						position={21}
						imgSrc={ReduxInFlask}
						textColor={"#CE79F0"}
					/>

					<SkillCard
						orderNumber="04"
						text={t("skills.sagaDescription")}
						skill={t("skills.reduxSaga")}
						list={[
							t("skills.sagaTopics.generator"),
							t("skills.sagaTopics.watchersAndWorkers"),
							t("skills.sagaTopics.effectCreators"),
							t("skills.sagaTopics.effectCombinators"),
							t("skills.sagaTopics.helpers"),
						]}
						position={29}
						imgSrc={SagaInFlask}
						textColor={"#7BC37A"}
					/>
				</div> */}
			</div>
		</section>
	);
}

export default SkillsSection;
