import React, { memo, useMemo } from "react";
import styles from "./TickerSection.module.css";

// Мемоизированный элемент списка для предотвращения лишних ререндеров
const TickerItem = memo(({ item }) => {
	return <li>{item}</li>;
});

const Ticker = ({ items, direction = "right" }) => {
	// Мемоизация обработанных элементов списка
	const processedItems = useMemo(() => {
		return items.map((item, index) => (
			<TickerItem key={`original-${index}`} item={item} />
		));
	}, [items]);

	// Мемоизация дублированных элементов списка
	const duplicatedItems = useMemo(() => {
		return items.map((item, index) => (
			<TickerItem key={`duplicate-${index}`} item={item} />
		));
	}, [items]);

	return (
		<div className={styles[`stock_ticker_${direction}`]}>
			<ul>{processedItems}</ul>
			<ul aria-hidden="true">{duplicatedItems}</ul>
		</div>
	);
};

export default memo(Ticker);
