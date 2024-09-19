import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import PersonalInfo from "./components/input/personal";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <PersonalInfo />
  </StrictMode>
);
