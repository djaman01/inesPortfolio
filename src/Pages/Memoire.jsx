import { Link } from "react-router-dom";
import {
  dessinInes,
  imagepara1,
  imagepara2,
  imagepara3,
} from "../assets/images";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Memoire = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  return (
    <>
      <Header />

      <Helmet>
        {/* Balise pour gérer le responsive quelque soit la taille de l'écran:  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Mémoire | Inès Benbrahim Andaloussi </title>

        <meta
          name="description"
          content="Retrouvez mon mémoire que vous pouvez télécharger ou imprimer"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inesbenbrahim.com/memoire" />
        <meta property="og:title" content="Mémoire | Inès Benbrahim Andaloussi" />
        <meta
          property="og:description"
          content="Retrouvez mon mémoire que vous pouvez télécharger ou imprimer"
        />
        <meta
          property="og:image"
          content="https://www.inesbenbrahim.com/assets/ines-benbrahim.png"
        />

        <link rel="canonical" href="https://www.inesbenbrahim.com/memoire" />
      </Helmet>

      <main>
        <div className="mb-10 mt-5 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Mémoire de recherche
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Un résumé de mon mémoire ou{" "}
            <Link
              to="/lienMemoire"
              className="text-blue-600 underline hover:text-blue-800"
            >
              cliquez sur ce lien
            </Link>{" "}
            pour le lire en entier
          </p>
        </div>

        {/*object-[50%_70%]: pour positionner l'image par rapport au centre du container /1ère valeure par rapport à l'axe X  et 2eme par rapport à l'axe Y sachant que 100% = Bottom of the image aligned with the bottom of the container */}
        <div className="h-96 w-full max-lg:h-36">
          <img
            src={dessinInes}
            alt="dessin"
            className="h-full w-full object-cover object-[50%_70%]"
          />
        </div>

        <main className="mt-1 overflow-hidden">
          <div className="my-10 grid grid-cols-2 grid-rows-[470px,400px,580px] max-lg:mx-5 max-lg:flex max-lg:flex-col max-lg:gap-y-5 lg:mx-16 lg:gap-x-14 lg:gap-y-20">
            <div className="max-lg:order-1 max-lg:rounded-lg max-lg:border max-lg:border-slate-400 max-lg:px-5 max-lg:py-2 max-lg:shadow-xl">
              <h1 className="font-montserrat mb-5 text-left text-3xl font-bold text-[#0F4C81] lg:mt-[-10px]">
                S'approprier le lieu…
              </h1>
              <p className="font-roboto text-lg leading-7 max-lg:text-[19px]">
                Mon mémoire de recherche de fin d'études raconte l'histoire d'un
                imaginaire collectif qui prend pour origine une image concrète
                et précise. <br />
                Et cette image possède forcément une{" "}
                <span className="font-bold">référence</span>. C'est cette
                référence en particulier qui caractérise l'imaginaire et qui
                introduit le sujet principal : <br />
                <span className="font-bold">le régionalisme</span>. <br />
                En effet, si le régionalisme existe, c'est parce qu'on a choisis
                quelque chose de précis, quelque part, on lui a donné une
                valeur, une histoire, qui l'a ancré dans ce quelque part, et il
                est devenu{" "}
                <span className="font-bold">la référence d'un lieu</span>.
              </p>
              <br />
              <p className="font-roboto text-lg leading-7 max-lg:text-[19px]">
                Mais alors, quelle est cette référence ? Est-elle substantielle
                et tangible ou est-elle invisible et cérébrale ? Comment déceler
                la chose qui définis le lieu, et en faire un usage pour faire
                perdurer cet imaginaire collectif, répondre à un désir,
                maintenir une vision confortable.
                <br />
                <span className="font-bold">
                  Ce mémoire réinterprète l'histoire de l'appropriation d'un
                  lieu par ses valeurs caractéristiques qui le définissent.
                </span>
              </p>
            </div>

            <div className="max-lg:order-2">
              <img
                className="h-full w-full rounded-xl"
                src={imagepara1}
                alt="Gants de gommage pour Hammam"
              />
            </div>

            <div data-aos="fade-right" className="max-lg:order-4">
              <img
                className="h-full w-full rounded-xl"
                src={imagepara2}
                alt="Faire Affaire avec nous"
              />
            </div>

            <div
              data-aos="fade-left"
              className="max-lg:order-3 max-lg:rounded-lg max-lg:border max-lg:border-slate-400 max-lg:px-5 max-lg:py-2 max-lg:pb-5 max-lg:shadow-xl"
            >
              <h1 className="font-montserrat mb-5 text-left text-3xl font-bold text-[#0F4C81] max-lg:mb-4 lg:mt-[-10px]">
                …connaître sa valeur…
              </h1>

              <p className="font-roboto text-lg leading-7 max-lg:text-[19px]">
                Si
                <span className="font-bold"> l'architecture vernaculaire </span>
                est une architecture de{" "}
                <span className="font-bold"> l'« ici »</span>, l'apparition de
                <span className="font-bold">
                  {" "}
                  l'architecture internationale{" "}
                </span>
                l'a relégué au rayon du démodé. <br />
              </p>
              <br />
              <p className="font-roboto text-lg leading-7 max-lg:text-[19px]">
                <span className="font-bold"> L'architecture régionaliste</span>{" "}
                qui tente de renouer avec ce vernaculaire est elle-même tenue
                d'être potentiellement{" "}
                <span className="font-bold"> réactionnaire</span>. <br />
                Toutefois, les conditions de la production de
                <span className="font-bold">
                  {" "}
                  l'architecture d'aujourd'hui{" "}
                </span>
                invitent à interroger ce mot dans sa substance plutôt que dans
                sa forme.
              </p>
            </div>

            <div
              data-aos="fade-right"
              className="max-lg:order-5 max-lg:rounded-lg max-lg:border max-lg:border-slate-400 max-lg:px-5 max-lg:py-2 max-lg:pb-5 max-lg:shadow-xl"
            >
              <h1 className="font-montserrat mb-5 text-left text-3xl font-bold text-[#0F4C81] lg:mt-[-10px]">
                ….Faire sans Refaire
              </h1>
              <p className="font-roboto text-lg leading-7 max-lg:text-[19px]">
                <span>Le mémoire pose surtout les questions suivantes</span>
                :
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    En quoi le mot régionalisme nous aide-t-il à penser la
                    production de l'architecture aujourd'hui ?
                  </li>
                  <li>
                    Peut-il nous éclairer sur des ouvertures qui invitent à voir
                    la discipline sous un nouveau prisme ?
                  </li>
                </ul>
              </p>{" "}
              <br />
              <p className="font-roboto text-lg leading-7 max-lg:text-[19px]">
                On verra dans ce mémoire que pour être quelque part, il faut
                s'inscrire dans une{" "}
                <span className="font-bold">temporalité</span> mais en faisant
                référence à des choses{" "}
                <span className="font-bold">sans temporalité</span>.<br /> On
                revient en effet à <span className="font-bold">GAIA </span>,
                figure mythologique de la Terre, une figure qui transcende et
                s'insère à nouveau dans les mémoires avec notamment l'héritage
                du vernaculaire. <br />
                Un tout nouvel intérêt pour la Terre,{" "}
                <span className="font-bold">
                  ce qu'elle possède et sait donner
                </span>
                , voit le jour.
              </p>
              <br />
              <p className="font-roboto text-lg leading-7 max-lg:text-[19px]">
                On peut faire quelque part sans être régionaliste puisqu'on ne
                cherche pas à valoriser une identité particulière, rassurer un
                imaginaire, et le maintenir, mais plutôt{" "}
                <span className="font-bold">être efficace et cohérent </span>
                dans un univers tout de même moderne.
                <br />
                Pour <span className="font-bold"> être quelque part</span>, on
                peut donc passer par{" "}
                <span className="font-bold">une imitation formelle</span>,{" "}
                <span className="font-bold"> une analogie</span> à des éléments
                qui évoquent le lieu, ou encore{" "}
                <span className="font-bold"> réagir avec le matériau</span> en
                passant par le langage dans l'architecture.
              </p>
            </div>

            <div data-aos="fade-left" className="max-lg:order-6">
              <img
                className="h-full w-full rounded-xl"
                src={imagepara3}
                alt="carte du monde"
              />
            </div>
          </div>
        </main>
      </main>

      <Footer />
    </>
  );
};

export default Memoire;
