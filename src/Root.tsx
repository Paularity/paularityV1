import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PinAuthOverlay from "./components/PinAuthOverlay";

export default function Root() {
  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem("authenticated") === "true"
  );

  return (
    <BrowserRouter>
      {!authenticated && (
        <PinAuthOverlay onAuthenticated={() => setAuthenticated(true)} />
      )}
      {authenticated && <App />}
    </BrowserRouter>
  );
}
