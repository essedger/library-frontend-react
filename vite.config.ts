import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { antdDayjs } from "antd-dayjs-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), antdDayjs()],
});
