import styles from "./TickerSection.module.css";

const Ticker = ({ items, direction = "left" }) => {
	return (
		<div className={styles[`stock_ticker_${direction}`]}>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item.name}</li>
				))}
			</ul>
			<ul aria-hidden="true">
				{items.map((item, index) => (
					<li key={index + items.length}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Ticker;
