import "reset-css";
import "./styles/locomotive.css";
import "./styles/App.css";
import PreviewSection from "./sections/PreviewSection";
import StorySection from "./sections/StorySection";
import SkillsSection from "./sections/SkillsSection";
import ArtsSection from "./sections/ArtsSection";
import ContactsSection from "./sections/ContactsSection";
import NewTicker from "./sections/TickerSection";
import ScrollToBottom from "./components/ScrollToBottom";
import { useEffect } from "react";

function App() {
	// Пасхалка :D
	useEffect(() => {
		console.log(
			"%cА вот и пасхалка, держи анекдот!\n— Почему программисты предпочитают темную тему ?\n— ... \n— Потому что светлая привлекает насекомых 🥁🥁",
			"background: rgb(189, 26, 91); color: white; margin-left:6vw; padding: 6px 12px; font-size: 1.3em; margin-bottom:5px"
		);
	}, []);

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
