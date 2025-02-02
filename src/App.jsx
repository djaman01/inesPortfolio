import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomeSections/HomePage";
import Contact from "./Pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      
    </Routes>
  </BrowserRouter>
  );
}
