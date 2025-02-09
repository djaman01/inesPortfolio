import Header from "../Components/Header";
import Footer from "../Components/Footer";

const LienMemoire = () => {
  return (
    <>
      <Header />

      <div className="mb-10 mt-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Mémoire de recherche
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Voici mon mémoire de fin d'études que vous pouvez télécharger ou imprimer
        </p>
      </div>

      <iframe
        src="/memoireInesAnda.pdf"
        width="100%"
        height="1200px"
        style={{ border: "none" }}
        title="Memoire de Recherche Ines Andaloussi"
      ></iframe>

      <Footer />
    </>
  );
};

export default LienMemoire;
