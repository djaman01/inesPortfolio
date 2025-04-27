import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { Helmet } from "react-helmet-async";

const CV = () => {
  return (
    <>
      <Helmet>
        {/* Balise pour gérer le responsive quelque soit la taille de l'écran:  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>CV | Ines Andaloussi </title>

        <meta
          name="description"
          content="Retrouvez mon CV que vous pouvez télécharger ou imprimer"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.inesbenbrahim.com/cv"
        />
        <meta
          property="og:title"
          content="CV | Ines Andaloussi"
        />
        <meta
          property="og:description"
          content="Retrouvez mon CV que vous pouvez télécharger ou imprimer"
        />
        <meta
          property="og:image"
          content="https://www.inesbenbrahim.com/assets/ines-benbrahim.png"
        />

        <link rel="canonical" href="https://www.inesbenbrahim.com/cv" />
      </Helmet>

      <Header />

      <div className="mb-10 mt-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Curriculum vitæ
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Voici mon CV que vous pouvez télécharger ou imprimer
        </p>
      </div>

      <iframe
        src="/cv-inesAnda.pdf"
        width="100%"
        height="1200px"
        style={{ border: "none" }}
        title="CV"
      ></iframe>

      <Footer />
    </>
  );
};

export default CV;
