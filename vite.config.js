import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/",
	server: {
		host: "0.0.0.0", // Позволяет доступ с любого IP в локальной сети
		port: 8080, // Порт разработки
		strictPort: false, // Позволить автоматически найти свободный порт
	},
});
