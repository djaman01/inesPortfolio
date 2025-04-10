import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ImagesComp from "../Components/ImagesComp";
import {
  theatre1,
  theatre2,
  theatre3,
  theatre4,
  theatre5,
  theatre6,
} from "../assets/images/projetsEcole/theatre";

import { Helmet } from "react-helmet-async";

const TheatreFrance = () => {
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

        <title>Théâtre | Inès Benbrahim Andaloussi </title>

        <meta
          name="description"
          content="Découvrez le projet de 'Théâtre à l'italienne', réalisé par Inès Benbrahim Andaloussi."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.inesbenbrahim.com/theatreFrance"
        />
        <meta
          property="og:title"
          content="Théâtre | Inès Benbrahim Andaloussi"
        />
        <meta
          property="og:description"
          content="Découvrez le projet de 'Théâtre à l'italienne', réalisé par Inès Benbrahim Andaloussi."
        />
        <meta
          property="og:image"
          content="https://www.inesbenbrahim.com/assets/ines-benbrahim.png"
        />

        <link
          rel="canonical"
          href="https://www.inesbenbrahim.com/theatreFrance"
        />
      </Helmet>

      <Header />
      <div className="mb-5 mt-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Théâtre à l'italienne
        </h1>
        <p className="mb-10 mt-2 text-lg text-gray-600 max-lg:mx-2">France</p>
      </div>

      <ImagesComp
        image1={theatre1}
        alt1="Théâtre en France 1"
        image2={theatre2}
        alt2="Théâtre en France 2"
        image3={theatre3}
        alt3="Théâtre en France 3"
        image4={theatre4}
        alt4="Théâtre en France 4"
        image5={theatre5}
        alt5="Théâtre en France 5"
        image6={theatre6}
        alt6="Théâtre en France 6"
      />

      <div className="font-roboto mx-32 mt-20 text-xl leading-relaxed max-lg:mx-5">
        <p>
          L'élément fondateur du projet est sa structure fractale. En effet, la
          structure se réduit progressivement pour permettre de passer de
          grandes dimensions à de plus petites, créant ainsi une hiérarchie
          spatiale cohérente.
        </p>
        <p className="my-2">
          L'enveloppe en béton, en contact direct avec la ville, constitue
          l'échelle la plus large. À l'intérieur, un meuble en bois recouvre la
          grande et la petite salle, correspondant aux plus petites dimensions
          de la fractale. Une cohérence matérielle et dimensionnelle s'installe
          : le béton est réservé aux grandes portées, tandis que le bois est
          utilisé pour la structure qui se resserre. Ce choix est justifié par
          la nature même des matériaux. La toiture de la salle, composée de
          poutres en bois en caisson, renforce cette perception d'une trame
          réduite, propre à la logique fractale.
        </p>

        <p className="my-2">
          Inspiré du modèle du théâtre à l'italienne, avec ses loges en voûte,
          le projet propose une réinterprétation contemporaine en utilisant
          l'arc comme élément structurant, intégré dans une logique fractale.
        </p>
        <p className="my-2">
          Une inversion spatiale est mise en jeu : la ville est symboliquement
          amenée à l'intérieur par la fractale, sans pour autant révéler
          immédiatement ce qu'elle contient. La structure enveloppe et contemple
          l'élément central — le théâtre — autour duquel gravite le programme.
          D'un côté, les espaces dédiés à la préparation du spectacle ; de
          l'autre, ceux consacrés à sa fabrication.
        </p>
        <p className="my-2">
          Ainsi, l'édifice devient un espace fermé, protégé par un “rideau de
          scène” extérieur, qui ne s'ouvre que vers l'intérieur. Ce dispositif
          dramatique renforce l'idée de seuil, de découverte progressive.
        </p>
        <p className="my-2">
          Avec cette structure fractale, trois dimensions sont mises en tension.
          Elles correspondent à un confort croissant et à une évolution du
          placement du corps selon trois temporalités de mouvement, enrichissant
          l'expérience spatiale et sensorielle du spectateur.
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

export default TheatreFrance;
