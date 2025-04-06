import styles from "./TickerSection.module.css";

const Ticker = ({ items, direction = "right" }) => {
	return (
		<div className={styles[`stock_ticker_${direction}`]}>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<ul aria-hidden="true">
				{items.map((item, index) => (
					<li key={index + items.length}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Ticker;
