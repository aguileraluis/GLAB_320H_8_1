import { Route, Routes } from "react-router-dom";
import CurrenciesPage from "./pages/CurrenciesPage";
import Main from "./pages/main";
import PricePage from "./pages/PricePage";
import Nav from "./components/nav";

export default function App () {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<CurrenciesPage />}/>
        <Route path="/price" element={<PricePage />}/>
        <Route path="/price/:symbol" element={<PricePage />}/>
      </Routes>
    </div>
  );
}