import {
  habiter1,
  habiter2,
  habiter3,
  habiter4,
  habiter5,
  habiter6,
  habiter7,
} from "../assets/images/projetsEcole/habiterMonde";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ImagesComp from "../Components/ImagesComp";

import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const HabiterMonde = () => {
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

        <title>Habiter le Monde | Inès Andaloussi </title>

        <meta
          name="description"
          content="Découvrez le projet 'Habiter le Monde', réalisé par Inès Benbrahim Andaloussi."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.inesbenbrahim.com/habiterMonde"
        />
        <meta
          property="og:title"
          content="Habiter le Monde | Inès Andaloussi"
        />
        <meta
          property="og:description"
          content="Découvrez le projet 'Habiter le Monde', réalisé par Inès Benbrahim Andaloussi."
        />
        <meta
          property="og:image"
          content="https://www.inesbenbrahim.com/assets/ines-benbrahim.png"
        />

        <link
          rel="canonical"
          href="https://www.inesbenbrahim.com/habiterMonde"
        />
      </Helmet>

      <Header />
      <div className="mb-5 mt-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Habiter le monde
        </h1>
        <p className="mb-10 mt-2 text-lg text-gray-600 max-lg:mx-2">France</p>
      </div>

      <ImagesComp
        image1={habiter1}
        alt1="Habiter le monde 1"
        image2={habiter2}
        alt2="Habiter le monde 2"
        image3={habiter3}
        alt3="Habiter le monde 3"
        image4={habiter4}
        alt4="Habiter le monde 4"
        image5={habiter5}
        alt5="Habiter le monde 5"
        image6={habiter6}
        alt6="Habiter le monde 6"
        image7={habiter7}
        alt7="Habiter le monde 7"
      />

      <div className="font-roboto mx-32 mt-20 text-xl leading-relaxed max-lg:mx-5">
        <p>
          En France, le projet vise à créer des espaces qui s'entrecroisent et
          se rencontrent, générant une dynamique d'appropriation pour les
          habitants. L'idée principale consiste à juxtaposer des espaces
          rigides, à la disposition sérieuse et alignée, avec des espaces
          partagés plus irréguliers et dynamiques. Cette tension entre rigueur
          et spontanéité structure l'ensemble du projet.
        </p>
        <p className="my-2">
          Pour favoriser les espaces communs, une stricte séparation est
          instaurée entre les zones privées et les parties partagées. Les unités
          d'habitation sont volontairement réduites à l'essentiel, permettant
          ainsi une diversité de typologies et favorisant la mixité sociale.
          Trois grands types d'espaces sont ainsi définis : les espaces communs,
          les zones intermédiaires dédiées à l'intimité familiale, et enfin les
          espaces intérieurs individuels.
        </p>

        <p className="my-2">
          Un système d'espaces partagés s'insère perpendiculairement dans la
          trame, mettant en valeur les cœurs d'îlots situés au rez-de-chaussée.
          Les différentes activités sont réparties sur des demi-niveaux, ce qui
          permet d'offrir une grande variété d'usages tout en maintenant une
          continuité visuelle et sonore. Des interruptions ponctuelles sont
          néanmoins prévues pour préserver le confort et l'intimité des usagers.
          La structure du bâtiment permet une interaction verticale fluide entre
          les différents espaces.
        </p>
        <p className="my-2">
          Le choix des matériaux participe pleinement à la mise en scène de
          cette dualité : la pierre est utilisée pour les espaces privés, tandis
          que le bois est réservé aux espaces communs. La façade en pierre
          exprime l'ordre et la régularité, en mettant notamment en valeur la
          relation à la fenêtre. Le bois, plus léger et chaleureux, évoque la
          convivialité et souligne la dimension collective de certains lieux.
        </p>
        <p className="my-2">
          Ainsi, ces deux matériaux confèrent une identité distincte à chaque
          type d'espace, tout en renforçant la cohérence générale du projet.
          Leur dialogue architectural accentue la dualité entre sphère intime et
          sphère partagée, inscrivant cette opposition au cœur même du langage
          du bâtiment.
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

export default HabiterMonde;
