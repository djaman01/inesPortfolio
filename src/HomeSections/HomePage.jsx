import { useEffect } from "react";
import { inesAnda } from "../assets/images";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "../Components/Footer";
import Presentation from "./Presentation";

const HomePage = () => {
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
      <header className="mb-2 mt-2">
        <Header />
      </header>

      <div className="relative">
        <div className="h-[630px] w-full border max-lg:h-[300px]">
          <img
            data-aos="fade-left"
            src={inesAnda}
            alt="Photo inès Andaloussi"
            className="h-full w-full rounded-2xl border object-cover object-top"
          />
        </div>

        {/* inset-0: place le div tout en haut-à gauche du container / bg-black/5= 5% opacity = on ne voit que 5% du bg-noir qui devient transparent pour assombrir l'image et mieux faire apparaitre le texte | /100 = bg tout noir = bg-black */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 pr-96 text-center text-white max-lg:w-80 max-lg:pr-28">
          <h1
            data-aos="fade-right"
            className="font-roboto-bold mt-[-140px] text-[45px] font-bold max-lg:mt-[-15px] max-lg:text-[32px]"
          >
            Portfolio
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="500"
            className="font-roboto-bold pt-10 text-[35px] text-[#0F4C81] max-lg:pt-0 max-lg:text-[24px]"
          >
            Ines <span className="max-lg:block">Benbrahim Andaloussi</span>
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-delay="1000"
            className="font-roboto-bold pt-10 text-[30px] max-lg:pt-4 max-lg:text-[21px]"
          >
            Architecte diplomée d'État
          </h3>
          <h3
            data-aos="fade-right"
            data-aos-delay="1500"
            className="font-roboto-bold pt-1 text-[30px] max-lg:text-[21px] lg:mt-4"
          >
            ENSA Versailles
          </h3>
        </div>
      </div>

      <div>
        <Presentation />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
