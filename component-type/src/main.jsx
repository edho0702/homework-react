import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";

import "@/styles/main.css";
import "@/styles/globals.css";

const domNode = document.getElementById("react-app");
createRoot(domNode).render(
    <StrictMode>
        <App />
    </StrictMode>
);
