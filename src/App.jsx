import "reset-css";
import "./styles/locomotive.css";
import "./styles/App.css";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

// Desktop секции
import PreviewSection from "./sections/PreviewSection";
import StorySection from "./sections/StorySection";
import SkillsSection from "./sections/SkillsSection";
import ArtsSection from "./sections/ArtsSection";
import ContactsSection from "./sections/ContactsSection";
import NewTicker from "./sections/TickerSection";

// Mobile секции
import { PreviewSectionMobile } from "./mobileSections/PreviewSectionMobile";
import { StorySectionMobile } from "./mobileSections/StorySectionMobile";
import { SkillsSectionMobile } from "./mobileSections/SkillsSectionMobile";
import { ArtsSectionMobile } from "./mobileSections/ArtsSectionMobile";
import ContactsSectionMobile from "./mobileSections/ContactsSectionMobile";
import { TickerSectionMobile as NewTickerMobile } from "./mobileSections/TickerSectionMobile";

import ScrollToBottom from "./components/ScrollToBottom";

function App() {
	const isMobile = useMediaQuery({ maxWidth: 750 }); // Проверяем мобильное устройство

	// Пасхалка :D
	useEffect(() => {
		console.log(
			"%cА вот и пасхалка, держи анекдот!\n— Почему программисты предпочитают темную тему ?\n— ... \n— Потому что светлая привлекает насекомых 🥁🥁",
			"background: rgb(189, 26, 91); color: white; margin-left:6vw; padding: 6px 12px; font-size: 1.3em; margin-bottom:5px"
		);
	}, []);

	if (isMobile) {
		// Мобильная версия
		return (
			<div className="section">
				<PreviewSectionMobile />
				<StorySectionMobile />
				<NewTickerMobile />
				<SkillsSectionMobile />
				<ArtsSectionMobile />
				<ContactsSectionMobile />
			</div>
		);
	}

	// Десктопная версия
	return (
		<div className="section">
			<PreviewSection />
			<StorySection />
			<NewTicker />
			<SkillsSection />
			<ArtsSection />
			<ContactsSection />
			<ScrollToBottom />
		</div>
	);
}

export default App;
