import Ticker from "../../components/Ticker";
import styles from "./TickerSection.module.css";

const TickerSection = () => {
	const items = [
		"Effector",
		"Redux",
		"React",
		"Axios",
		"WebPack",
		"NPM",
		"Lodash",
		"Vite",
		"Yarn",
		"Javascript",
		"Jinja",
		"RabbitMQ",
		"Zog",
	];

	const items2 = [
		"HTML5",
		"CSS3",
		"ThreeJS",
		"Gsap",
		"Locomotive",
		"Keykloak",
		"Jest",
		"Docker",
		"NodeJs",
		"Yarn",
		"jQuery",
		"SASS",
		"SCSS",
	];

	const items3 = [
		"Redux-Thunk",
		"Vue",
		"Redux-Saga",
		"RxJs",
		"Formik",
		"Typescript",
		"MaterialUI",
		"Tailwind",
		"ReactVirtualized",
		"Enzyme",
		"React-PropTypes",
		"Swagger",
		"Postman",
	];

	return (
		<div className={styles.ticker__wrapper}>
			<Ticker items={items} direction="right" />
			<Ticker items={items2} direction="left" />
			<Ticker items={items3} direction="right" />
			<Ticker items={items} direction="left" />
		</div>
	);
};

export default TickerSection;
