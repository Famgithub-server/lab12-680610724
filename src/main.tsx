import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App";
import App from "./pages/TodolistPage";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
