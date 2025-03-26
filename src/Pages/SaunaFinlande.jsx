import { projet1 } from "../assets/images/projetsEcole";
import {
  saunaFin1,
  saunaFin2,
  saunaFin3,
  saunaFin4,
} from "../assets/images/projetsEcole/saunaFin";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ImagesComp from "../Components/ImagesComp";

const SaunaFinlande = () => {
  return (
    <>
      <Header />
      <div className="mb-5 mt-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Sauna en Finlande
        </h1>
        <p className="mb-10 mt-2 text-lg text-gray-600 max-lg:mx-2">
          L'expérience de la pierre
        </p>
      </div>

      <ImagesComp
        image1={projet1}
        alt1="Sauna en Finlande 1"
        image2={saunaFin1}
        alt2="Sauna en Finlande 2"
        image3={saunaFin2}
        alt3="Sauna en Finlande 3"
        image4={saunaFin3}
        alt4="Sauna en Finlande 4"
        image5={saunaFin4}
        alt5="Sauna en Finlande 5"
      />

      <div>
        <p>
          Le sauna s'insère sur le site de la maison expérimentale d'Alvar Aalto
          à Muuratsalo, près du lac pour permettre les aller-retour vers l'eau
          froide.
        </p>
        <p>
          {" "}
          Si l'on ne retrouve traditionnellement la pierre que sous la forme
          d'un amas au dessus du feu, dans un sauna, ses qualités physiques et
          visuelles savent procurer des sensations fortes que ce projet, donne à
          voir et à ressentir.
        </p>
        <p>
          La pierre expose ses qualités et donne accès à ses sensations.
          <br />
          Le principe du sauna est celui d'une masse de pierres qui prends une
          forme propre; on passe d'une pierre sauvage à une architecture de
          pierre plus maîtrisée jusqu'aux pierres du sauna.
          <br />
          Les pierres ici sont également une ressource de chaleur.
        </p>
        <p>
          Alors qu'en Finlande les saunas sont la plupart du temps en bois,
          celui-ci redonne la valeur à la pierre qui est l'initiatrice du sauna
          Finlandais, sans lequelle il n'existe pas.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default SaunaFinlande;
