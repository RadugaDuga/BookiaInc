import { useTheme } from "../../providers/ThemeProvider";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();

	const handleClick = (event) => {
		const button = event.currentTarget;
		const ripple = document.createElement('div');
		const diameter = Math.max(window.innerWidth, window.innerHeight);
		const radius = diameter / 2;

		ripple.style.width = ripple.style.height = `${diameter}px`;
		ripple.style.left = `${event.clientX - radius}px`;
		ripple.style.top = `${event.clientY - radius}px`;
		ripple.className = styles.ripple;

		document.body.appendChild(ripple);
		toggleTheme();

		ripple.addEventListener('animationend', () => {
			ripple.remove();
		});
	};

	return (
		<button
			title="Сменить тему"
			onClick={handleClick}
			className={styles.themeSwitcher}
		>
			{theme === "light" ? (
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 1V3"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 21V23"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4.22 4.22L5.64 5.64"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18.36 18.36L19.78 19.78"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M1 12H3"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M21 12H23"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4.22 19.78L5.64 18.36"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18.36 5.64L19.78 4.22"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			) : (
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 12.79C20.8427 14.4922 20.2037 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46549 17.117 3.62593 15.589 3.25391 13.9205C2.88189 12.252 2.99274 10.5121 3.57346 8.9043C4.15418 7.29651 5.18084 5.88737 6.53324 4.84175C7.88564 3.79614 9.50782 3.15714 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1414C17.9906 14.2661 19.6517 13.7866 21 12.79Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</button>
	);
};

export default ThemeSwitcher;
