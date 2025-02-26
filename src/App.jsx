import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomeSections/HomePage";
import Contact from "./Pages/Contact";
import CV from "./Pages/CV";
import Memoire from "./Pages/Memoire";
import LienMemoire from "./Pages/LienMemoire";
import ProjetAgence from "./Pages/ProjetAgence";
import ProjetFinEtude from "./Pages/ProjetFinEtude";
import LienPFE from "./Pages/LienPFE";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/CV" element={<CV />}></Route>
      <Route path="/memoire" element={<Memoire />}></Route>
      <Route path="/lienMemoire" element={<LienMemoire />}></Route>
      <Route path="/projetAgence" element={<ProjetAgence />}></Route>
      <Route path="/projetFinEtude" element={<ProjetFinEtude />}></Route>
      <Route path="/lienPFE" element={<LienPFE />}></Route>
      
    </Routes>
  </BrowserRouter>
  );
}
