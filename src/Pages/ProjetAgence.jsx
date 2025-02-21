import {
  imageAgence1,
  imageAgence2,
  imageAgence3,
  imageAgence4,
  imageAgence5,
} from "../assets/images";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const ProjetAgence = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  //Code pour ensuite créer une condition pour appliquer un data-os différents pour les écran >=md et les écrans <md c.ad les écrans mobiles
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 768,
  ); //compare la largeur actuelle de l'écran (window.innerwidth) à 768px: donc ça retourne true ou false en fonction du résultat et j'ai mis 768px car md=768px

  //On va coder un useEffect pour écouter les chgts de taille de l'écran en temps réel et rendre isMediumScreen true or false en fonction des chgts de tailles
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // Dès l'affichage de la page: Retourne true or false en comparant la taille de l'écran à 768px
    };

    window.addEventListener("resize", handleResize); //"resize" est un évenement qui écoute les chgts de taille de l'écran en temps réel: quand un utilisateur redimensionne la taille de l'écran, l'évenement va se déclencher et appler handleResize et met donc à jour dynamiquement isMediumScreen en true or false par rapport à 768px, pour refléter la largeur de la fenêtre en temps réel

    return () => window.removeEventListener("resize", handleResize); //Pour nettoyer les gestionnaires d'évenements et éviter les memory leaks: here we use it to ensure that the 'resize' event listener is properly removed when the component is unmounted
  }, []);

  return (
    <>
      <Header />

      <main>
        <div className="mb-5 mt-5 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Projet en agence
          </h1>
          <p className="mt-2 text-lg text-gray-600 mb-10">
            Agence Chartier Dalix - 2023
          </p>
        </div>

        {/* Paragraphe 1 et 1 image */}
        <div className="mx-10 mb-10 grid grid-cols-[500px_1fr] gap-5 max-lg:mx-5 max-lg:flex max-lg:flex-col lg:mb-20">
          <div className="font-roboto h-[530px] px-5 pt-2 shadow-2xl max-lg:h-auto max-lg:pb-3">
            <h1 className="font-montserrat pb-5 text-center text-2xl font-bold text-[#0F4C81]">
              Bureaux et laboratoires, <br /> campus Paris-Saclay
            </h1>
            <p className="text-lg">
              Une structure rationnelle au service d'espaces partagés généreux
              et d'une grande flexibilité d'aménagement. <br />
              <br />
              <span className="font-bold">Programme</span> : Ensemble de bureaux
              et laboratoires dédiés à la recherche, espaces de travail
              hybrides, espaces de production, cafétéria, parking en sous-sols
            </p>
          </div>
          <div className="h-[530px] w-full max-lg:h-96">
            <img
              src={imageAgence1}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full object-fill"
            />
          </div>
        </div>

        {/* Paragraphe 2 et 2 images */}
        <div className="mx-10 mb-10 grid grid-cols-[500px_1fr_1fr] gap-5 max-lg:mx-5 max-lg:flex max-lg:flex-col lg:mb-20">
          <div className="font-roboto h-[600px] px-5 pt-2 shadow-2xl max-lg:h-auto max-lg:pb-3">
            <h1 className="font-montserrat pb-5 text-center text-2xl font-bold text-[#0F4C81]">
              Présentation du projet
            </h1>
            <p className="text-lg">
              Ce projet, situé sur le plateau de Saclay face à l'ENS conçue par
              <span className="font-bold"> Renzo Piano</span>, vise à accueillir
              divers acteurs dans un complexe de quatre bâtiments reliés par un
              atrium vitré.
            </p>
            <br />
            <p className="text-lg">
              Le bâtiment s'implante sur une parcelle étirée en face de la ligne
              18 de métro.
              <br /> Les niveaux supérieurs visent à accueillir des laboratoires
              bureaux pour une grande diversité d'acteurs.
              <br /> Le bâtiment se divise en 4 volumes générant des
              cours-jardins, favorisant à la fois les percées visuelles, et
              l'intégration d'aménagements extérieurs s'inspirant du paysage
              avoisinant.
              <br /> Un atrium central permet à la fois le croisement des
              différents occupants, mais aussi l'apport de lumière.
              <br /> Le design mêle fonctionnalité et intégration au paysage
              environnant (plateau agricole, franges boisées) tout en répondant
              à des enjeux urbains et environnementaux.
            </p>
          </div>
          <div className="h-[600px] w-full max-lg:h-96">
            <img
              data-aos={isMediumScreen ? "fade-down" : "fade-left"}
              src={imageAgence2}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="h-[600px] w-full max-lg:h-96">
            <img
              data-aos={isMediumScreen ? "fade-up" : "fade-right"}
              src={imageAgence3}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full object-fill"
            />
          </div>
        </div>

        {/* Paragraphe 3 et 2 images */}
        <div className="mx-10 mb-10 grid grid-cols-[500px_1fr_1fr] gap-5 max-lg:mx-5 max-lg:flex max-lg:flex-col">
          <div className="font-roboto h-[530px] px-5 pt-2 shadow-2xl max-lg:h-auto max-lg:pb-3">
            <h1 className="font-montserrat pb-5 text-center text-2xl font-bold text-[#0F4C81]">
              Missions accomplies
            </h1>

            <p className="text-lg">
              J'ai contribué dès la phase APS en participant à des tâches
              variées:
            </p>
            <br />
            <p className="text-lg">
              <span className="font-bold">Conception et techniques</span> :
              plans de sécurité incendie, dimensionnement des poutres et
              poteaux, et intégration des normes incendies.
              <br />
              <span className="font-bold">Visualition</span> : rendus 3D
              (enscape) et graphiques (InDesign) pour les réunions
              hebdomadaires.
              <br /> <span className="font-bold">Optimisation</span> :
              planification du parking et révision constante des plans des
              étages et RDC. <br />
              <span className="font-bold"> Coordination</span> : collaboration
              avec les bureaux d'études (structure, fluides, HQE, acoustique) et
              suivi des réunions hebdomadaires.
            </p>
          </div>
          <div className="h-[530px] w-full max-lg:h-max">
            <img
              data-aos={isMediumScreen ? "fade-down" : "fade-left"}
              src={imageAgence4}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="h-[530px] w-full max-lg:h-96">
            <img
              data-aos={isMediumScreen ? "fade-up" : "fade-right"}
              src={imageAgence5}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full object-fill"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjetAgence;
