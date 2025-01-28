import { logoInes } from "../assets/images";


const Footer = () => {
  //To go instantly to the top of the page, when redirecting to it
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="bg-gray-300 mt-20 ">
      <div className="padding-x grid grid-cols-3 py-5 max-lg:grid-cols-1">
        <div className="flex flex-col items-center max-lg:order-2">
          <h4 className="font-montserrat mb-4 text-2xl font-medium leading-normal max-lg:mb-0">
            Contact
          </h4>

          <ul>
            <li className="font-roboto mt-3 text-lg leading-normal">
              <b>Mail:</b> @gmail.com
            </li>
            <li className="font-roboto mt-3 text-lg leading-normal">
              <b>Tel:</b> 
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center max-lg:order-1">
          <img
            src={logoInes}
            alt="Phenix logo"
            width={150}
            height={46}
            className="cursor-pointer rounded-lg bg-white px-2 py-2"
            onClick={scrollToTop}
          />
          <div className="max-lg:mb-3">
            <p className="text-white-400 mt-6 w-[400px] text-center martian-mono-regular text-base leading-7 max-lg:w-[350px] max-lg:text-center">
              Portfolio
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center max-lg:order-3">
         

          <h4 className="font-montserrat mb-4 mt-2 text-2xl font-medium leading-normal">
            Réseaux Sociaux
          </h4>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
