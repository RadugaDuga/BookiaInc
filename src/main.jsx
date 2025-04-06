import { createRoot } from "react-dom/client";

import "./styles/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './locales/i18n';

import App from "./App";

import { ThemeProvider } from "./providers/ThemeProvider";
import LocomotiveProvider from "./providers/LocomotiveProvider";

createRoot(document.getElementById("root")).render(
	<>
		<LocomotiveProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</LocomotiveProvider>
	</>
);
