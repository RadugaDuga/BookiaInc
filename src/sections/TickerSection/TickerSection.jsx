import Ticker from "../../components/Ticker";
import styles from "./TickerSection.module.css";

const items = [
	{ name: "Effector" },
	{ name: "Redux" },
	{ name: "React" },
	{ name: "Axios" },
	{ name: "WebPack" },
	{ name: "NPM" },
	{ name: "Lodash" },
	{ name: "Vite" },
	{ name: "Yarn" },
	{ name: "Javascript" },
	{ name: "Jinja" },
	{ name: "RabbitMQ" },
];

const items2 = [
	{ name: "HTML5" },
	{ name: "CSS3" },
	{ name: "ThreeJS" },
	{ name: "Gsap" },
	{ name: "Locomotive" },
	{ name: "Keykloak" },
	{ name: "Jest" },
	{ name: "Docker" },
	{ name: "NodeJs" },
	{ name: "Yarn" },
	{ name: "jQuery" },
	{ name: "SASS" },
	{ name: "SCSS" },
];

const items3 = [
	{ name: "Redux-Thunk" },
	{ name: "Vue" },
	{ name: "Redux-Saga" },
	{ name: "RxJs" },
	{ name: "Formik" },
	{ name: "Typescript" },
	{ name: "MaterialUI" },
	{ name: "Tailwind" },
	{ name: "ReactVirtualized" },
	{ name: "Enzyme" },
	{ name: "React-PropTypes" },
	{ name: "Swagger" },
	{ name: "Postman" },
];

function TickerSection() {
	return (
		<>
			<Ticker items={items} direction="right" />
			<Ticker items={items2} direction="left" />
			<Ticker items={items3} direction="right" />
			<span className={styles.log}></span>
		</>
	);
}

export default TickerSection;
