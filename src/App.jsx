import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomeSections/HomePage";
import Contact from "./Pages/Contact";
import CV from "./Pages/CV";
import Memoire from "./Pages/Memoire";
import LienMemoire from "./Pages/LienMemoire";
import ProjetAgence from "./Pages/ProjetAgence";


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
      
    </Routes>
  </BrowserRouter>
  );
}
