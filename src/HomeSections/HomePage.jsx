import { useEffect } from "react";
import { inesAnda } from "../assets/images";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
    });
  });

  return (
    <>
      <header className="mb-2 mt-2">
        <Header />
      </header>

      <main className="relative mb-[1000px]">
        <div className="h-[650px] w-[1520px]">
          <img
            data-aos="fade-left"
            src={inesAnda}
            alt="Photo inès Andaloussi"
            className="h-full w-full rounded-2xl object-cover object-top"
          />
        </div>

        {/* inset-0: place le div tout en haut-à gauche du container / bg-black/10: /10 = 10% opacity = on ne voit que 10% du bg-noir qui devient transparent pour assombrir l'image et mieux faire apparaitre le texte | /100 = bg tout noir = bg-black */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 pr-96 text-white">
          <h1 data-aos="fade-right" className="text-[40px] font-bold font-roboto mt-[-140px]">
            Portfolio
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="650"
            className="mt-10 text-[26px] playwrite"
          >
            Ines Benbrahim Andaloussi
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-delay="1100"
            className="mt-2 text-2xl font-roboto"
          >
            Architecte diplomée d'État
          </h3>
          <h3
            data-aos="fade-right"
            data-aos-delay="1600"
            className="mt-2 text-2xl font-roboto"
          >
            ENSA Versailles
          </h3>
        </div>
      </main>
    </>
  );
};

export default HomePage;
