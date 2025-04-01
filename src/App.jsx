import "reset-css";
import "./styles/locomotive.css";
import "./styles/App.css";
import PreviewSection from "./sections/PreviewSection";
import StorySection from "./sections/StorySection";
import SkillsSection from "./sections/SkillsSection";
import ArtsSection from "./sections/ArtsSection";
import ContactsSection from "./sections/ContactsSection";
import { SideBar } from "./sections/SideBar";
import NewTicker from "./sections/TickerSection";

function App() {
	return (
		<div className="section">
			<SideBar />
			<PreviewSection />
			<StorySection />
			<NewTicker />
			<SkillsSection />
			<ArtsSection />
			<ContactsSection />
		</div>
	);
}

export default App;
