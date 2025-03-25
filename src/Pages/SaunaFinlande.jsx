import { projet1 } from "../assets/images/projetsEcole";
import {
  saunaFin1,
  saunaFin2,
  saunaFin3,
  saunaFin4,
} from "../assets/images/projetsEcole/saunaFin";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

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

      <div className="mx-auto h-[700px] w-[1000px] shadow-xl">
        <img
          src={projet1}
          alt="Sauna en Finlande"
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="grid grid-cols-2">
        <div>
          <img src={saunaFin1} alt="sauna Finlande 1" />
          <img src={saunaFin2} alt="sauna Finlande 2" />
          <img src={saunaFin3} alt="sauna Finlande 3" />
          <img src={saunaFin4} alt="sauna Finlande 4" />
        </div>
        <div>
          <p>
            Le sauna s'insère sur le site de la maison expérimentale d'Alvar
            Aalto à Muuratsalo, près du lac pour permettre les aller-retour vers
            l'eau froide.
          </p>
          <p>
            {" "}
            Si l'on ne retrouve traditionnellement la pierre que sous la forme
            d'un amas au dessus du feu, dans un sauna, ses qualités physiques et
            visuelles savent procurer des sensations fortes que ce projet, donne
            à voir et à ressentir.
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
            celui-ci redonne la valeur à la pierre qui est l'initiatrice du
            sauna Finlandais, sans lequelle il n'existe pas.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SaunaFinlande;
