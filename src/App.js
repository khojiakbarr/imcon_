import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
