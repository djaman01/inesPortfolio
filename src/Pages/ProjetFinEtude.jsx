import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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
      <Header />

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

      {/* Intro */}
      <div
        className="font-roboto-bold mx-64 rounded-2xl p-5 text-center text-xl shadow-xl"
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

      <main className="font-roboto mx-40 text-xl">

        {/* Paysage */}
        <div className="mt-20 flex flex-col items-center">
          <div>
            <h1>
              L'intervention commence par la{" "}
              <span className="font-bold">restauration</span> des murs de
              soutènement et la{" "}
              <span className="font-bold">réhabilitation </span> des chemins
              structurant le village, assurant ainsi stabilité et continuité des
              circulations.
            </h1>
            <br />
            <h1 className="mb-5">
              La reconstruction des murs en pierre sèche respecte les
              savoir-faire locaux, tout en intégrant des principes de sécurité
              parasismique et de gestion des eaux pluviales grâce à des drains
              et barbacanes.
            </h1>
          </div>

          <div>
            <img src={paysage} alt="Planche Paysage" className="h-[1000px]" />
          </div>
        </div>

        {/* Place */}
        <div className="mt-20 flex flex-col items-center">
          <div>
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
          <div>
            <img src={place} alt="Planche Place" className="h-[1000px]" />
          </div>
        </div>

        {/* Ecole */}
        <div className="mt-20 flex flex-col items-center">
          <div>
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
          <div>
            <img src={ecole} alt="Planche Ecole" className="h-[850px]" />
          </div>
        </div>

        {/*Le logement  */}
        <div className="mt-20 flex flex-col items-center">
          <div>
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
          <div>
            <img src={logement} alt="Planche Logement" className="h-[850px]" />
          </div>
        </div>

        {/*  */}
      </main>

      <Footer />
    </>
  );
};

export default ProjetFinEtude;
