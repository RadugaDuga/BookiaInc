import "reset-css";
import "./styles/locomotive.css";
import "./styles/App.css";
import PreviewSection from "./components/PreviewSection";
import StorySection from "./components/StorySection";
import GradientSection from "./components/GradientSection";
import SkillsSection from "./components/SkillsSection";
import ArtsSection from "./components/ArtsSection";
import ContactsSection from "./components/ContactsSection";
import { SideBar } from "./components/SideBar";

function App() {
	return (
		<div className="section">
			<SideBar />
			<PreviewSection />
			<StorySection />
			<GradientSection />
			<SkillsSection />
			<ArtsSection />
			<ContactsSection />
		</div>
	);
}

export default App;
