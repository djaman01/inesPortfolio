
import { projet1 } from "../assets/images/projetsEcole";
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

      <div className="h-[700px] w-[1000px] mx-auto shadow-xl">
        <img src={projet1}  alt="Sauna en Finlande" className="h-full w-full object-cover object-bottom" />
      </div>

      <Footer />
    </>
  );
};

export default SaunaFinlande;
