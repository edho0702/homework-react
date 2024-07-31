import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import pluginReact from "@vitejs/plugin-react";

const viteConfig = defineConfig({
    plugins: [
        pluginReact({
            jsxRuntime: "automatic",
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});

export default viteConfig;
