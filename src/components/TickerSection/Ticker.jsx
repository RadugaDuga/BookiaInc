import "./TickerSection.css";

const Ticker = () => {
	return (
		<div className="stock-ticker">
			<ul>
				<li className="minus">Effector</li>
				<li className="plus">Redux</li>
				<li className="plus">React</li>
				<li className="minus">Axios</li>
				<li className="plus">WebPack</li>
				<li className="minus">NPM</li>
				<li className="plus">Lodash</li>
				<li className="minus">Vite</li>
				<li className="minus">Yarn</li>
				<li className="minus">Vue</li>
				<li className="minus">Jinja</li>
				<li className="minus">RabbitMQ</li>
			</ul>

			<ul aria-hidden="true">
				<li className="minus">Effector</li>
				<li className="plus">Redux</li>
				<li className="plus">React</li>
				<li className="minus">Axios</li>
				<li className="plus">WebPack</li>
				<li className="minus">NPM</li>
				<li className="plus">Lodash</li>
				<li className="minus">Vite</li>
				<li className="minus">Yarn</li>
				<li className="minus">Vue</li>
				<li className="minus">Jinja</li>
				<li className="minus">RabbitMQ</li>
			</ul>
		</div>
	);
};

export default Ticker;
