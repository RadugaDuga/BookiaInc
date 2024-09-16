import "reset-css";
import "./styles/locomotive.css";
import "./styles/App.css";
import PreviewSection from "./components/PreviewSection";
import StorySection from "./components/StorySection";
import SkillsSection from "./components/SkillsSection";
import ArtsSection from "./components/ArtsSection";
import ContactsSection from "./components/ContactsSection";
import { SideBar } from "./components/SideBar";
import NewTicker from "./components/TickerSection";

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
