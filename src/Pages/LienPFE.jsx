import Header from "../Components/Header";
import Footer from "../Components/Footer";

const LienPFE = () => {
  return (
    <>
      <Header />

      <div className="mb-10 mt-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Livret de recherche
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Ce livret illustre notre voyage sur le terrain et notre analyse préalable au projet
          </p>
      </div>

      <iframe
        src="/livretPFE-Ines.pdf"
        width="100%"
        height="1200px"
        style={{ border: "none" }}
        title="Livret de recherche"
      ></iframe>
      <Footer />
    </>
  );
};

export default LienPFE;
