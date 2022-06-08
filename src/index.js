import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Minting from "./pages/Minting";
import Gallery from "./pages/Gallery";
import PublicSale from "./pages/PublicSale";
import NoPage from "./pages/NoPage";
import "./i18next";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/minting" element={<Minting />} />
          <Route path="/public-sale" element={<PublicSale />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
