import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CV = () => {
  return (
    <>
      <Header />

      <div className="mb-10 mt-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Curriculum vitæ</h1>
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
