import "./TickerSection.css";

const Ticker = ({ items, direction = 'left' }) => {
	return (
	  <div className={`stock-ticker-${direction}`}>
		<ul>
		  {items.map((item, index) => (
			<li key={index} className={item.type}>{item.name}</li>
		  ))}
		</ul>
		<ul aria-hidden="true">
		  {items.map((item, index) => (
			<li key={index + items.length} className={item.type}>{item.name}</li>
		  ))}
		</ul>
	  </div>
	);
  };

export default Ticker;
