import Ticker from "./Ticker";

function TickerSection() {
	return (
		<div>
			<Ticker
				items={[
					"React",
					"Redux",
					"Flux",
					"Effector",
					"Typescript",
					"Axios",
					"REST API",
					"Vue",
					"Jinja",
				]}
			/>
		</div>
	);
}

export default TickerSection;
