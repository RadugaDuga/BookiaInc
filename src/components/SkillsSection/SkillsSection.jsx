import {
	JsInFlask,
	ReactInFlask,
	ReduxInFlask,
	SagaInFlask,
} from "../../assets/optimized";
import SkillCard from "./SkillCard";
import styles from "./SkillSection.module.css";

function SkillsSection() {
	return (
		<section className={styles.container} id="skills-section">
			<div className={styles.content}>
				<div className={styles.col1}>
					<div className={styles.card}>
						<h1>My hard skills</h1>
						<p>
							These cards contain a short description of the
							topics I studied for each tool. I studied these
							tools not separately, but in conjunction with the
							React - Redux library. <br />
							<br /> On small projects, I tried using the
							typescript and redux toolkit along with formik.
							<br />
							<br />
							These tools were integrated to build comprehensive
							web applications, allowing me to understand their
							interaction and dependencies. I focused on mastering
							state management, optimizing component rendering,
							and employing best practices for clean, maintainable
							code.
						</p>
					</div>

					<SkillCard
						orderNumber="02"
						skill="React"
						list={[
							"Introducing JSX",
							"Components and Props",
							"State and Lifecycles",
							"Conditional Rendering",
							"Forms Lists and Keys",
							"Context",
							"Higher-Order Components",
							"Hooks",
							"Virtual DOM conception",
						]}
						position={12}
						text="Today applications are written on frameworks, so for myself I
                            choose react."
						imgSrc={ReactInFlask}
						textColor={"#44BFE5"}
					/>

					<SkillCard
						orderNumber="04"
						text="Saga makes application side effects easier to
                            manage, more efficient to execute, easy to test, and
                            better at handling failures."
						skill="Redux-Saga"
						list={[
							"Generator",
							"Watchers and Workers",
							"Effect Creators",
							"Effect combinators",
							"Helpers",
						]}
						position={29}
						imgSrc={SagaInFlask}
						textColor={"#7BC37A"}
					/>
				</div>
				<div className={styles.col2}>
					<SkillCard
						orderNumber="01"
						skill="JavaScript"
						list={[
							"Variables",
							"Data Types",
							"Conditional branching",
							"Arrow functions, the basics",
							"Debugging in the browser",
							"Arrays",
							"Objects",
							"Object methods, this",
							"Promise",
							"Generators",
							"Typescript",
						]}
						text="I chose javascript because it is universal, you can
                            write anything on it. I took most of the information
                            from learn javascript."
						position={1}
						imgSrc={JsInFlask}
						textColor={"#FFDB76"}
					/>

					<SkillCard
						orderNumber="03"
						skill="Redux"
						list={[
							"Actions",
							"Reducers",
							"Store",
							"Data flow",
							"Dispatch",
							"Redux thunk",
							"Redux Form",
							"Redux Toolkit",
						]}
						text="in large applications, developers use state
                            managers. Today one of the most popular is Redux, so
                            I choose it."
						position={21}
						imgSrc={ReduxInFlask}
						textColor={"#CE79F0"}
					/>
				</div>
			</div>
		</section>
	);
}

export default SkillsSection;
