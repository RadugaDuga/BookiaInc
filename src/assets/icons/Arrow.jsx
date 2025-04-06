export default function Arrow(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="4"
		>
			<line x1="12" y1="5" x2="12" y2="19" color="inherit"></line>
			<polyline points="19 12 12 19 5 12" color="inherit"></polyline>
		</svg>
	);
}
