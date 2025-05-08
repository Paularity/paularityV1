import { Routes, Route } from "react-router-dom";
import BlackfortPsacc from "./components/Projects/BlackfortPsacc";
import BlackfortHris from "./components/Projects/BlackfortHris";
import SmsiWeb from "./components/Projects/SmsiWeb";
import SmsiMobile from "./components/Projects/SmsiMobile";
import Home from "./components/Home";
import BlackfortDpwhEdms from "./components/Projects/BlackfortDpwhEdms";
import BlackfortDpwhNgobia from "./components/Projects/BlackfortDpwhNgobia";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/0001" element={<BlackfortHris />} />
      <Route path="/projects/0002" element={<BlackfortDpwhEdms />} />
      <Route path="/projects/0003" element={<BlackfortDpwhNgobia />} />
      <Route path="/projects/0004" element={<BlackfortPsacc />} />
      <Route path="/projects/0005" element={<SmsiWeb />} />
      <Route path="/projects/0006" element={<SmsiMobile />} />
    </Routes>
  );
}
