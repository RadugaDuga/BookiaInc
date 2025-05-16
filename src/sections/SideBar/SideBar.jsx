import styles from "./SideBar.module.css"; // Импортируем стили для SideBar
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";

import { AudioSwitcher } from "../../components/AudioSwitcher";

const SideBar = () => {
	return (
		<div className={styles.sidebar}>
			<LanguageSwitcher />
			<ThemeSwitcher />
			<AudioSwitcher />
		</div>
	);
};

export default SideBar;
