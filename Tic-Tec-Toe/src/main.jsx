import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import Game from "@/Game";

const domNode = document.getElementById("react-app");

createRoot(domNode).render(
    <StrictMode>
        <Game />
    </StrictMode>
);
