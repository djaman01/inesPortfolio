import { planPres } from "../assets/images";


const Presentation = () => {
  return (
    <section className="py-10 px-6 lg:px-20">
      <h2 className="font-roboto mt-5 pb-7 text-center text-4xl font-bold text-gray-800 lg:text-[40px]">
        Présentation
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/3">
          <img
            src={planPres}
            alt="Architect Portfolio"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Text */}
        <div className="w-full lg:w-2/3 space-y-6 text-gray-700 text-justify">
          <p>
            Architecte diplômée d’état de l’ENSA Versailles depuis février 2024,
            j’ai eu la chance de contribuer à une variété de projets
            architecturaux, durant mes divers stages, au cours des projets
            poursuivis en école ou encore lors de mon premier travail dans le
            cadre d’une mise en situation professionnelle pour la HMONP poursuivie
            à l’Ecole Spéciale d’Architecture.
          </p>
          <p>
            L’architecture est ma passion et je suis impatiente d’explorer cette
            passion de manière significative et innovante. Je suis particulièrement
            sensible à une question que j’ai eu la chance de relever dans la rédaction
            de mon mémoire de master : celle du lieu.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-700">
            "Le lieu est une source d’inspiration fondamentale : il nourrit le projet
            par son histoire, son paysage ou ses usages."
          </blockquote>
          <p>
            Une approche sensible aux conditions du lieu, intégrant des données
            physiques (thermiques, atmosphériques…) peut guider ainsi la conception
            d’architectures uniques et contextuelles.
          </p>
          <p>
            À travers ce portfolio, j’espère partager avec vous mon parcours, mes
            réalisations et transmettre ma passion pour cette profession !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
