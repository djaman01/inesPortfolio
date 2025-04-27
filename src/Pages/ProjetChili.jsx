import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ImagesComp from "../Components/ImagesComp";
import {
  chili1,
  chili2,
  chili3,
  chili4,
  chili5,
  chili6,
  chili7,
  chili8,
} from "../assets/images/projetsEcole/projetChili";

import { Helmet } from "react-helmet-async";

const ProjetChili = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="overflow-hidden">
      <Helmet>
        <meta name="robots" content="noindex" />

        {/* Balise pour gérer le responsive quelque soit la taille de l'écran:  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Centrale Chili | Inès Andaloussi </title>

        <meta
          name="description"
          content="Découvrez le projet de Centrale Thermique réalisé par Inès Benbrahim Andaloussi."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.inesbenbrahim.com/centraleChili"
        />
        <meta
          property="og:title"
          content="Centrale Chili | Inès Andaloussi"
        />
        <meta
          property="og:description"
          content="Découvrez le projet de centrale thermique réalisé par Inès Benbrahim Andaloussi."
        />
        <meta
          property="og:image"
          content="https://www.inesbenbrahim.com/assets/ines-benbrahim.png"
        />

        <link
          rel="canonical"
          href="https://www.inesbenbrahim.com/centraleChili"
        />
      </Helmet>

      <Header />
      <div className="mb-5 mt-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Centrale thermique solaire Cerro Dominador
        </h1>
        <p className="mb-10 mt-2 text-lg text-gray-600 max-lg:mx-2">Chili</p>
      </div>

      <ImagesComp
        image1={chili1}
        alt1="Projet au Chili 1"
        image2={chili2}
        alt2="Projet au Chili 2"
        image3={chili3}
        alt3="Projet au Chili 3"
        image4={chili4}
        alt4="Projet au Chili 4"
        image5={chili5}
        alt5="Projet au Chili 5"
        image6={chili6}
        alt6="Projet au Chili 6"
        image7={chili7}
        alt7="Projet au Chili 7"
        image8={chili8}
        alt8="Projet au Chili 8"
      />

      <div className="font-roboto mx-32 mt-20 text-xl leading-relaxed max-lg:mx-5">
        <p>
          La centrale thermique solaire, nommée « Cerro Dominador », est nichée
          au cœur du désert d'Atacama. Elle est équipée de 10 600 miroirs, qui
          suivent le trajet du soleil pour concentrer sa lumière sur une tour
          centrale.
        </p>
        <p className="my-2">
          L'objectif de ce projet est d'y introduire une dimension humaine. Le
          but est d'appréhender la complexité du site pour la simplifier et y
          installer de la vie. À quel point la forme d'un logement peut-elle
          être influencée par un simple miroir ?
        </p>

        {/* prettier-ignore */}
        <div className="prose text-black font-roboto text-xl prose-ul:list-inside prose-li:marker:text-black">
         <p>Trois questions fondamentales ont guidé l'étude en prenant en compte le
         site, son climat et le programme :</p> 
          <ul>
            <li>Comment se protéger efficacement du soleil tout en restant à l'ombre autant que possible ?</li> 
            <li>Comment tirer parti de l'énergie solaire grâce à l'inertie ?</li> 
            <li>Quel sera le lien avec la structure existante ?</li> 
          </ul> 
        </div>

        <p className="mt-4">
          Une compréhension précise du territoire a été acquise grâce à des
          dessins détaillés du site à six échelles différentes.
        </p>
        <p className="my-2">
          Nous avons analysé minutieusement le trajet standard d'un miroir pour
          établir des modèles d'ombres moyennes sur toute l'année. Cette analyse
          rigoureuse nous a permis de créer un schéma d'ombres, qui a servi de
          base à la conception des logements.
        </p>

        <div className="font-roboto prose text-xl text-black prose-ol:list-inside prose-li:marker:text-black">
          <p>Nous avons réagi aux ombres de deux manières distinctes :</p>
          <ol>
            <li>En suivant fidèlement leur forme complexe.</li>
            <li>
              En rationalisant cette forme pour la rendre praticable, avec des
              lignes droites.
            </li>
          </ol>
        </div>

        <p className="mt-4">
          La disposition des logements est ainsi influencée par le mouvement des
          miroirs : chaque pièce bénéficie d'une exposition solaire différente
          en fonction de sa position. Une symétrie émane de cette organisation,
          en suivant celle du soleil. L'objectif est de se placer autant que
          possible sous l'ombre.
        </p>
        <p className="my-2">
          Les plans des logements et de la ville sont dessinés par les jeux
          d'ombre, formant ainsi le cœur du projet avec trois éléments clés : le
          patio, l'ombre et l'inertie.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <Link to="/projetsEcole" onClick={scrollToTop}>
          <button className="font-roboto-bold flex items-center gap-2 rounded-full bg-[#0F4C81] px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105">
            <IoArrowBackOutline size={22} className="text-white" />
            <span>Retour</span>
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ProjetChili;
