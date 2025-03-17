import { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { projet1, projet2, projet3, projet4, projet5 } from "../assets/images";

const ProjetsEcole = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 900,
      easing: "ease-in-out",
    });
  });

  return (
    <>
      <Header />
      <main>
        <div className="mb-5 mt-5 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Projets en École
          </h1>
          <p className="mb-10 mt-2 text-lg text-gray-600">
            Cliquez sur les images pour voir le projet plus en détail
          </p>
        </div>

        <div className="mx-40 mt-16 flex max-lg:mx-10 max-lg:mt-0 max-lg:flex-col">
          <div
            className="h-56 w-1/4 border border-red-400 max-lg:h-40 max-lg:w-full"
            data-aos="fade-right"
          >
            <h1>Projet 1</h1>
          </div>
          <div
            className="h-56 w-3/4 border border-red-400 max-lg:h-[410px] max-lg:w-full"
            data-aos="fade-left"
          >
            <img
              src={projet1}
              alt="Projet en Finlande"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-40 mt-16 flex max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
          <div
            className="h-56 w-1/4 border border-red-400 max-lg:h-40 max-lg:w-full"
            data-aos="fade-right"
          >
            <h1>Projet 2</h1>
          </div>
          <div
            className="h-56 w-3/4 border border-red-400 max-lg:h-[410px] max-lg:w-full"
            data-aos="fade-left"
          >
            <img
              src={projet2}
              alt="Projet en Finlande"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-40 mt-16 flex max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
          <div
            className="h-56 w-1/4 border border-red-400 max-lg:h-40 max-lg:w-full"
            data-aos="fade-right"
          >
            <h1>Projet 3</h1>
          </div>
          <div
            className="h-56 w-3/4 border border-red-400 max-lg:h-[410px] max-lg:w-full"
            data-aos="fade-left"
          >
            <img
              src={projet3}
              alt="Projet en Finlande"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-40 mt-16 flex max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
          <div
            className="h-56 w-1/4 border border-red-400 max-lg:h-40 max-lg:w-full"
            data-aos="fade-right"
          >
            <h1>Projet 4</h1>
          </div>
          <div
            className="h-56 w-3/4 border border-red-400 max-lg:h-[410px] max-lg:w-full"
            data-aos="fade-left"
          >
            <img
              src={projet4}
              alt="Projet en Finlande"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-40 mt-16 flex max-lg:mx-10 max-lg:mt-16 max-lg:flex-col">
          <div
            className="h-56 w-1/4 border border-red-400 max-lg:h-40 max-lg:w-full"
            data-aos="fade-right"
          >
            <h1>Projet 5</h1>
          </div>
          <div
            className="h-56 w-3/4 border border-red-400 max-lg:h-[410px] max-lg:w-full"
            data-aos="fade-left"
          >
            <img
              src={projet5}
              alt="Projet en Finlande"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjetsEcole;
