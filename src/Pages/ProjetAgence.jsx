import { imageAgence1, imageAgence2, imageAgence3 } from "../assets/images";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ProjetAgence = () => {
  return (
    <>
      <Header />

      <main>
        <div className="mb-5 mt-5 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Projet en agence
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Agence Chartier Dalix - 2023
          </p>
        </div>

        {/* Paragraphe 1 et 1 image */}
        <div className="mx-5 mb-10 grid grid-cols-[500px_1fr] gap-5">
          <div className="h-[530px] border border-slate-gray px-5 pt-2">
            <h1 className="pb-5 text-center text-2xl">
              Bureaux et laboratoires, <br /> campus Paris-Saclay
            </h1>
            <p>
              Une structure rationnelle au service d'espaces partagés généreux
              et d'une grande flexibilité d'aménagement Programme :<br />{" "}
              Ensemble de bureaux et laboratoires dédiés à la recherche, espaces
              de travail hybrides, espaces de production, cafétéria, parking en
              sous-sols
            </p>
          </div>
          <div className="h-[530px] w-full">
            <img
              src={imageAgence1}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full border border-slate-gray object-fill"
            />
          </div>
        </div>

        {/* Paragraphe 2 et 2 images */}
        <div className="mx-5 mb-10 grid grid-cols-[500px_1fr_1fr] gap-5">
          <div className="h-[530px] border border-slate-gray px-5 pt-2">
            <h1 className="pb-5 text-center text-2xl">
              Présentation du projet
            </h1>
            <p>
              Ce projet, situé sur le plateau de Saclay face à l'ENS conçue par
              Renzo Piano, vise à accueillir divers acteurs dans un complexe de
              quatre bâtiments reliés par un atrium vitré. Le bâtiment
              s'implante sur une parcelle étirée en face de la ligne 18 de
              métro. Les niveaux supérieurs visent à accueillir des laboratoirs
              bureaux pour une grande diversité d'acteurs. Le bâtiment se divise
              en 4 volumes générant des cours-jardins, favorisant à la fois les
              percées visuelles, et l'intégration d'aménagements extérieurs
              s'inspirant du paysage avoisinant. Un atrium central permet à la
              fois le croisement des différents occupants, mais aussi l'apport
              de lumière. Le design mêle fonctionnalité et intégration au
              paysage environnant (plateau agricole, franges boisées) tout en
              répondant à des enjeux urbains et environnementaux.
            </p>
          </div>
          <div className="h-[530px] w-full">
            <img
              src={imageAgence2}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full border border-slate-gray object-fill"
            />
          </div>
          <div className="h-[530px] w-full">
            <img
              src={imageAgence3}
              alt="4 volumes pour une echelle urbaine"
              className="h-full w-full border border-slate-gray object-fill"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjetAgence;
