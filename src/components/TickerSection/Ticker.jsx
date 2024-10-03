import "./TickerSection.css";

const Ticker = () => {
	return (
		<div className="stock-ticker">
			<ul>
				<li className="minus">
					Effector
				</li>
				<li className="plus">
					Redux
				</li>
				<li className="plus">
					React
				</li>
				<li className="minus">
					Axios
				</li>
				<li className="plus">
					WebPack
				</li>
				<li className="minus">
					NPM
				</li>
				<li className="plus">
					Lodash
				</li>
				<li className="minus">
					Date-Fns
				</li>
			</ul>

			<ul aria-hidden="true">
				<li className="minus">
					Effector
				</li>
				<li className="plus">
					Redux
				</li>
				<li className="plus">
					React
				</li>
				<li className="minus">
					Axios
				</li>
				<li className="plus">
					WebPack
				</li>
				<li className="minus">
					NPM
				</li>
				<li className="plus">
					Lodash
				</li>
				<li className="minus">
					Date-Fns
				</li>
			</ul>
		</div>
	);
};

export default Ticker;
