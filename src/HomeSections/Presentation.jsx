import { planPres } from "../assets/images";

const Presentation = () => {
  return (
    <section className="my-7 px-20">
      <h2 className="font-roboto pb-10 text-center text-4xl font-bold text-gray-800 lg:text-[40px]">
        Présentation
      </h2>

      <div className="flex items-center gap-10">
        <div className="w-1/3">
          <img
            src={planPres}
            alt="Architect Portfolio"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        <div className="w-2/3 space-y-4 text-gray-800">
          <p>
            <span className="font-bold">A</span>rchitecte diplômée d'état de
            l'ENSA Versailles depuis février 2024, j'ai eu la chance de
            contribuer à une variété de projets architecturaux, durant mes
            divers stages, au cours des projets poursuivis en école ou encore
            lors de mon premier travail dans le cadre d'une mise en situation
            professionnelle pour la HMONP poursuivie à l'Ecole Spéciale
            d'Architecture.
          </p>
          <p>
            <span className="font-bold">L'</span>architecture est ma passion et
            je suis impatiente d'explorer cette passion de manière significative
            et innovante.
          </p>

          <p>
          <span className="font-bold">J</span>e suis particulièrement sensible à une question que j'ai eu la
            chance de relever dans la rédaction de mon mémoire de master : <span className="font-bold italic">celle
            du lieu.</span> <br />
            J'évoque le lieu comme un espace géographique physique mais aussi
            culturel, géologique et historique, celui qui englobe tous les
            éléments permettant d'identifier un espace et de permettre à une
            population de s'identifier à ce lieu.
          </p>
          <p>
            <span className="font-bold">A</span>u cours de mes années d'études
            en école d'architecture, j'ai développé de nombreuse compétence,
            cherchant constamment à repousser mes propres limites pour relever
            de nouveaux défis et perfectionner mes aptitudes.
          </p>
          <p>
            <span className="font-bold">D</span>e plus, mes expériences au
            Maroc, en Suisse et en France m'ont permis de comprendre les
            responsabilités inhérentes au monde professionnel et de découvrir
            les rouages du milieu du travail dans l'architecture, sensiblement
            différent de celui des études. <br />
            J'ai appris à prendre en compte les diverses contraintes d'un
            projet, à considérer l'aspect économique, ainsi qu'à interagir avec
            les différents corps de métier pour progresser efficacement.
            <br />
            Ces expériences m'ont dotée des compétences logiques nécessaires au
            métier, me permettant d'apprendre à allier créativité et
            rationalité.
          </p>
          <p>
            <span className="font-bold">À </span>travers ce portfolio, j'espère
            partager avec vous mon parcours, mes réalisations et transmettre ma
            passion pour cette profession !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
