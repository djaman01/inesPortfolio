import { planPres } from "../assets/images";

const Presentation = () => {
  return (
    <section className="px-6 py-10 lg:px-20">
      <h2 className="font-roboto mt-5 pb-7 text-center text-4xl font-bold text-gray-800 lg:text-[40px]">
        Présentation
      </h2>

      <div className="flex flex-col items-center gap-10 lg:flex-row">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/3">
          <img
            src={planPres}
            alt="Architect Portfolio"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right Column: Text */}
        <div className="w-full space-y-6 text-justify text-gray-700 lg:w-2/3">
          <p>
            Architecte diplômée d’état de l’ENSA Versailles depuis février 2024,
            j’ai eu la chance de contribuer à une variété de projets
            architecturaux, durant mes divers stages, au cours des projets
            poursuivis en école ou encore lors de mon premier travail dans le
            cadre d’une mise en situation professionnelle pour la HMONP
            poursuivie à l’Ecole Spéciale d’Architecture.
          </p>
          <p>
            L’architecture est ma passion et je suis impatiente d’explorer cette
            passion de manière significative et innovante. Je suis
            particulièrement sensible à une question que j’ai eu la chance de
            relever dans la rédaction de mon mémoire de master : celle du lieu.
            J’évoque le lieu comme un espace géographique physique mais aussi
            culturel, géologique et historique, celui qui englobe tous les
            éléments permettant d’identifier un espace et de permettre à une
            population de s’identifier à ce lieu.
          </p>
          <p>
            Au cours de mes années d’études en école d’architecture, j’ai
            développé de nombreuse compétence, cherchant constamment à repousser
            mes propres limites pour relever de nouveaux défis et perfectionner
            mes aptitudes.
          </p>
          <p>
            De plus, mes expériences au Maroc, en Suisse et en France m’ont
            permis de comprendre les responsabilités inhérentes au monde
            professionnel et de découvrir les rouages du milieu du travail dans
            l’architecture, sensiblement différent de celui des études. J’ai
            appris à prendre en compte les diverses contraintes d’un projet, à
            considérer l’aspect économique, ainsi qu’à interagir avec les
            différents corps de métier pour progresser efficacement. Ces
            expériences m’ont dotée des compétences logiques nécessaires au
            métier, me permettant d’apprendre à allier créativité et
            rationalité.
          </p>
          <p>
            À travers ce portfolio, j’espère partager avec vous mon parcours,
            mes réalisations et transmettre ma passion pour cette profession !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
