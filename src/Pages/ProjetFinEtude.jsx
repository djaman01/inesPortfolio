import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ecole, logement, paysage, place } from "../assets/images";

const ProjetFinEtude = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  return (
    <>
      <Helmet>
        {/* Balise pour gérer le responsive quelque soit la taille de l'écran:  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>PFE | Inès Andaloussi </title>

        <meta
          name="description"
          content="Retrouvez mon projet de fin d'études que vous pouvez télécharger ou imprimer"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.inesbenbrahim.com/pfe"
        />
        <meta
          property="og:title"
          content="PFE | Inès Andaloussi"
        />
        <meta
          property="og:description"
          content="Retrouvez mon projet de fin d'études que vous pouvez télécharger ou imprimer"
        />
        <meta
          property="og:image"
          content="https://www.inesbenbrahim.com/assets/ines-benbrahim.png"
        />

        <link rel="canonical" href="https://www.inesbenbrahim.com/pfe" />
      </Helmet>
      <Header />

      <div className="mb-10 mt-5 text-center overflow-hidden">
        <h1 className="text-4xl font-extrabold text-gray-800 max-lg:mx-1">
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

      {/* Intro */}
      <div
        className="font-roboto-bold mx-64 rounded-2xl p-5 text-center text-xl shadow-2xl max-lg:mx-1"
        data-aos="fade-left"
      >
        <h1>
          Ce projet questionne la reconstruction après un séisme{" "}
          <span className="text-green-600">
            en dépassant la seule urgence du relogement.
          </span>{" "}
          <br />
          À travers une approche sensible et ancrée dans le territoire,
          l'objectif est de redonner au{" "}
          <span className="text-green-600">village d'Azro</span> une cohérence
          paysagère, structurelle et sociale tout en intégrant des principes de
          résilience sismique et climatique.
        </h1>
      </div>

      <main className="font-roboto mx-40 mt-20 text-xl max-lg:mx-0">
        {/* Paysage */}
        <div className="flex flex-col items-center">
          <div className="max-lg:mx-5">
            <h1 className="font-montserrat mb-5 text-center text-3xl font-bold text-[#0F4C81]">
              LE PAYSAGE
            </h1>
            <h2>
              L'intervention commence par la{" "}
              <span className="font-bold">restauration</span> des murs de
              soutènement et la{" "}
              <span className="font-bold">réhabilitation </span> des chemins
              structurant le village, assurant ainsi stabilité et continuité des
              circulations.
            </h2>
            <br />
            <h2 className="mb-5">
              La reconstruction des murs en pierre sèche respecte les
              savoir-faire locaux, tout en intégrant des principes de sécurité
              parasismique et de gestion des eaux pluviales grâce à des drains
              et barbacanes.
            </h2>
          </div>

          <div>
            <img src={paysage} alt="Planche Paysage" className="h-[1000px]" />
          </div>
        </div>

        {/* Place */}
        <div className="mt-20 flex flex-col items-center">
          <h1 className="font-montserrat mb-5 text-center text-3xl font-bold text-[#0F4C81]">
            LA PLACE
          </h1>
          <div className="max-lg:mx-5">
            <h1>
              Dans un village marqué par la proximité des habitations mais
              dépourvu de lieu de rassemblement, une{" "}
              <span className="font-bold">ancienne place</span> en ruine est
              réinvestie en un espace central.
            </h1>
            <br />
            <h1 className="mb-5">
              Une ombrière en bois, inspirée des techniques locales d'assemblage
              protège cet espace, favorisant un nouvel usage collectif.
            </h1>
          </div>
          <div className="max-lg:mx-2">
            <img src={place} alt="Planche Place" className="h-[1000px]" />
          </div>
        </div>

        {/* Ecole */}
        <div className="mt-20 flex flex-col items-center">
          <h1 className="font-montserrat mb-5 text-center text-3xl font-bold text-[#0F4C81]">
            L'ÉCOLE
          </h1>
          <div className="max-lg:mx-5">
            <h1>
              Face au besoin d'éducation, une{" "}
              <span className="font-bold">nouvelle école</span> en pisé armé est
              conçue pour offrir un cadre sécurisé et thermiquement adapté.
            </h1>
            <br />
            <h1 className="mb-5">
              Le bâtiment joue avec les matériaux locaux - pierre, bois, terre -
              et intègre des stratégies climatiques telles que des murs épais,
              un patio central ombragé et des ouvertures favorisant la
              ventilation naturelle.
            </h1>
          </div>
          <div className="max-lg:mx-2">
            <img src={ecole} alt="Planche Ecole" className="h-[850px]" />
          </div>
        </div>

        {/*Le logement  */}
        <div className="mt-20 flex flex-col items-center">
          <h1 className="font-montserrat mb-5 text-center text-3xl font-bold text-[#0F4C81]">
            LE LOGEMENT
          </h1>
          <div className="max-lg:mx-5">
            <h1>
              <span className="font-bold">Les logements</span>, implantés au
              cœur du village, respectent la logique de densité et d'intimité
              propre au mode de vie local.
            </h1>
            <br />
            <h1 className="mb-5">
              Construits en pisé armé, ils sont conçus pour résister aux
              séismes, avec des murs de refend et une ventilation naturelle
              optimisée par des cheminées thermiques. Des sas d'entrée en
              chicane assurent une transition thermique et préservent l'intimité
              des habitants.
            </h1>
          </div>
          <div className="max-lg:mx-2">
            <img src={logement} alt="Planche Logement" className="h-[850px]" />
          </div>
        </div>
      </main>

      {/* Conclusion */}
      <div
        className="font-roboto-bold mx-64 mt-10 rounded-2xl p-5 text-center text-xl shadow-2xl max-lg:mx-1"
        data-aos="fade-right"
      >
        <h1>
          Ce projet est un{" "}
          <span className="text-green-600">travail de couture </span> entre
          l'existant et la reconstruction, cherchant à préserver l'identité du
          village tout en l'adaptant aux défis contemporains. <br />
          Loin d'un geste architectural étranger, il propose une lecture
          attentive du lieu, conciliant techniques vernaculaires et stratégies
          résilientes, dans une{" "}
          <span className="text-green-600">continuité</span> respectueuse du
          paysage et de la culture locale.
        </h1>
      </div>

      <Footer />
    </>
  );
};

export default ProjetFinEtude;
