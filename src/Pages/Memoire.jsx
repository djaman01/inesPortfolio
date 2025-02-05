import { dessinInes } from "../assets/images";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Memoire = () => {
  return (
    <>
      <Header />

      <main>
        <div className="mb-10 mt-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Mémoire de recherche
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Un résumé de mon mémoire ainsi qu'un lien pour le voir en entier
          </p>
        </div>

        {/*  */}
        <div className="w-full h-96">
          <img src={dessinInes} alt="dessin" className="w-full h-full object-cover" />
        </div>

        <div>
          
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Memoire;
