import { createRoot } from "react-dom/client";

import "./styles/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import App from "./App";

import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./ThemeProvider";
import LocomotiveProvider from "./LocomotiveProvider";

createRoot(document.getElementById("root")).render(
	<>
		<CustomCursor />
		<LocomotiveProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</LocomotiveProvider>
	</>
);
