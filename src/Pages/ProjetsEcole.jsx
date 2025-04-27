import { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  projet1,
  projet2,
  projet3,
  projet4,
  projet5,
} from "../assets/images/projetsEcole";

import { Helmet } from "react-helmet-async";

const ProjetsEcole = () => {
  //
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 900,
      easing: "ease-in-out",
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <Helmet>
        {/* Balise pour gérer le responsive quelque soit la taille de l'écran:  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Projets Écoles | Ines Andaloussi </title>
        <meta
          name="description"
          content="Retrouvez les projets que j'ai réalisé durant ma formation d'architecte"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.inesbenbrahim.com/projetsEcole"
        />
        <meta
          property="og:title"
          content="Projets Écoles | Ines Andaloussi "
        />
        <meta
          property="og:description"
          content="Retrouvez les projets que j'ai réalisé durant ma formation d'architecte"
        />
        <meta
          property="og:image"
          content="https://www.inesbenbrahim.com/assets/ines-benbrahim.png"
        />

        <link
          rel="canonical"
          href="https://www.inesbenbrahim.com/projetsEcole"
        />
      </Helmet>

      <Header />
      <main className="overflow-hidden">
        <div className="mb-5 mt-5 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Projets en École
          </h1>
          <p className="mb-10 mt-2 text-lg text-gray-600 max-lg:mx-2">
            Cliquez sur les images pour voir les projets plus en détail
          </p>
        </div>

        <Link to="/saunaFinlande" onClick={scrollToTop}>
          <div className="mx-40 mt-16 flex cursor-pointer max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
            <div
              className="flex h-56 w-1/4 items-center justify-center border-l-4 border-[#0F4C81] bg-[#f9f6f1] shadow-xl max-lg:h-40 max-lg:w-full"
              data-aos="fade-right"
            >
              <h1 className="montserrat-strong text-center text-gray-900">
                Architecture de l'atmosphère <br /> Finlande
              </h1>
            </div>
            <div
              className="h-56 w-3/4 shadow-xl max-lg:h-[410px] max-lg:w-full"
              data-aos="fade-left"
            >
              <img
                src={projet1}
                alt="Projet en Finlande"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Link>

        <Link to="/projetChili" onClick={scrollToTop}>
          <div className="mx-40 mt-16 flex cursor-pointer max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
            <div
              className="flex h-56 w-1/4 items-center justify-center border-l-4 border-[#eec233] bg-[#f9f6f1] shadow-xl max-lg:h-40 max-lg:w-full"
              data-aos="fade-right"
            >
              <h1 className="montserrat-strong text-center text-gray-900">
                At the edge of physics <br /> Chili
              </h1>
            </div>
            <div
              className="h-56 w-3/4 shadow-xl max-lg:h-[410px] max-lg:w-full"
              data-aos="fade-left"
            >
              <img
                src={projet2}
                alt="Projet au Chili"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Link>

        <Link to="/projetSuisse" onClick={scrollToTop}>
          <div className="mx-40 mt-16 flex cursor-pointer max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
            <div
              className="flex h-56 w-1/4 items-center justify-center border-l-4 border-[#2e8b57] bg-[#f9f6f1] shadow-xl max-lg:h-40 max-lg:w-full"
              data-aos="fade-right"
            >
              <h1 className="montserrat-strong text-center text-gray-900">
                Construire une coopérative <br /> Suisse
              </h1>
            </div>
            <div
              className="h-56 w-3/4 shadow-xl max-lg:h-[410px] max-lg:w-full"
              data-aos="fade-left"
            >
              <img
                src={projet3}
                alt="Projet en Finlande"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Link>
        <Link to="/habiterMonde" onClick={scrollToTop}>
          <div className="mx-40 mt-16 flex cursor-pointer max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
            <div
              className="flex h-56 w-1/4 items-center justify-center border-l-4 border-[#b87333] bg-[#f9f6f1] shadow-xl max-lg:h-40 max-lg:w-full"
              data-aos="fade-right"
            >
              <h1 className="montserrat-strong text-center text-gray-900">
                Habiter le monde <br /> France
              </h1>
            </div>
            <div
              className="h-56 w-3/4 shadow-xl max-lg:h-[410px] max-lg:w-full"
              data-aos="fade-left"
            >
              <img
                src={projet4}
                alt="Projet en Finlande"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Link>
        <Link to="/theatreFrance" onClick={scrollToTop}>
          <div className="mx-40 mt-16 flex cursor-pointer max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
            <div
              className="flex h-56 w-1/4 items-center justify-center border-l-4 border-[#a0a0a0] bg-[#f9f6f1] shadow-xl max-lg:h-40 max-lg:w-full"
              data-aos="fade-right"
            >
              <h1 className="montserrat-strong text-center text-gray-900">
                Le théâtre du monde <br /> France
              </h1>
            </div>
            <div
              className="h-56 w-3/4 shadow-xl max-lg:h-[410px] max-lg:w-full"
              data-aos="fade-left"
            >
              <img
                src={projet5}
                alt="Projet en Finlande"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default ProjetsEcole;
