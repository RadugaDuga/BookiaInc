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

function App() {
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
