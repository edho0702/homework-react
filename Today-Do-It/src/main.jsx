import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import "@/styles/reset.css";
import App from "@/component/App";

const domNode = document.getElementById("react-app");

createRoot(domNode).render(
    <StrictMode>
        <App />
    </StrictMode>
);
