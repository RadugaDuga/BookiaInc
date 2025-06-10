import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { AudioSwitcher } from "../../components/AudioSwitcher";
import styles from "./SideBarMobile.module.css";

export default function SideBarMobile() {
	return (
		<div className={styles.sidebar}>
			<LanguageSwitcher />
			<ThemeSwitcher />
			<AudioSwitcher />
		</div>
	);
}
