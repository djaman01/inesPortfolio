import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjetFinEtude = () => {
  return (
    <>
      <Header />

      <main>
        <div className="mb-10 mt-5 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Projet de fin d'études
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Re - Penser, Batir, Habiter pour que la vie reprenne -{" "}
            <Link
              to="/lienPFE"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Livret de recherche
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjetFinEtude;
