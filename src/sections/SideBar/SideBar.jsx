import styles from "./SideBar.module.css"; // Импортируем стили для SideBar
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";

const SideBar = () => {
	return (
		<div className={styles.sidebar}>
			<LanguageSwitcher />
			<ThemeSwitcher />
			
		</div>
	);
};

export default SideBar;
