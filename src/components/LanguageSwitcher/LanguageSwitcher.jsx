import { useTranslation } from "react-i18next";
import { LanguageIcon } from "../../assets/icons";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const handleClick = () => {
		i18n.language !== "ru" ? changeLanguage("ru") : changeLanguage("en");
	};

	return (
		<button onClick={handleClick} className={styles.languageSwitcher}>
			<LanguageIcon />
		</button>
	);
};

export default LanguageSwitcher;
