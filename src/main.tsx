import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";

console.log("✅ React app is initializing...");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
