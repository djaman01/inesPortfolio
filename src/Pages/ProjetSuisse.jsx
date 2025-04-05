import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  suisse1,
  suisse2,
  suisse3,
  suisse4,
  suisse5,
} from "../assets/images/projetsEcole/projetSuisse";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ImagesComp from "../Components/ImagesComp";

const ProjetSuisse = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mb-5 mt-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Une coopérative à Zurich
        </h1>
        <p className="mb-10 mt-2 text-lg text-gray-600 max-lg:mx-2">Suisse</p>
      </div>

      <ImagesComp
        image1={suisse1}
        alt1="Projet Suisse 1"
        image2={suisse2}
        alt2="Projet Suisse 2"
        image3={suisse3}
        alt3="Projet Suisse 3"
        image4={suisse4}
        alt4="Projet Suisse 4"
        image5={suisse5}
        alt5="Projet Suisse 5"
      />

      <div className="font-roboto mx-32 mt-20 text-xl leading-relaxed max-lg:mx-5">
        <p>
          À Zurich, entre une gare, une place publique, un entrepôt de tram et
          des logements, un nouveau projet de coopérative doit voir le jour.
        </p>
        <p className="my-2">
          Ici, le bâtiment se développe en recherchant l'ensoleillement. C'est
          un grand corps bâti autonome, assurant la transition entre un espace
          structuré et régulier et un environnement plus libre et organique.
        </p>

        <p className="my-2">
          Au rez-de-chaussée, des pilotis créent une impression de forêt de
          poteaux. Cette configuration allège la massivité du bâtiment et génère
          des espaces couverts, pouvant être investis par les habitants et les
          usagers. L'espace ainsi formé interagit directement avec son contexte
          : il clôt l'arrière des jardins privés tout en prolongeant la place
          publique, qu'il vient dilater.
        </p>
        <p className="my-2">
          Les espaces publics se déploient au rez-de-chaussée et au premier
          étage. Les entrées dédiées au public sont situées du côté de la gare,
          tandis que celles des logements se trouvent du côté des jardins.
        </p>
        <p className="my-2">
          Le principe constructif repose sur un module carré qui se répète et se
          décale, formant des logements en lames, traversants, profitant à la
          fois de la lumière du sud et du nord. Chaque cage d'escalier dessert
          au minimum quatre appartements et intègre un puits de lumière.
        </p>
        <p className="my-2">
          Enfin, le dernier niveau accueille des clusters et des jardins privés.
          Ainsi, le bâtiment se compose de trois éléments majeurs : un
          soubassement en pilotis, un corps central abritant les logements et un
          couronnement végétalisé.
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

export default ProjetSuisse;
