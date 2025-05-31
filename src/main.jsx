import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/animate.css"
import "./css/vesey.css"
import "./css/bootstrap.min.css"
import "./css/jquery.fancybox.min.css"
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
