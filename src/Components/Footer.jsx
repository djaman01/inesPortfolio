import { logoInes } from "../assets/images";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  //To go instantly to the top of the page, when redirecting to it
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="mt-20 bg-[#0F4C81] text-white">
      <div className="padding-x grid grid-cols-3 pb-2 pt-5 max-lg:grid-cols-1">
        <div className="flex flex-col items-center max-lg:order-2">
          <h4 className="font-montserrat mb-4 text-2xl font-medium leading-normal max-lg:mb-0">
            Contact
          </h4>

          <ul>
            <li className="font-roboto mt-3 text-lg leading-normal">
              <b>Mail:</b> ines.anda@gmail.com
            </li>
            <li className="font-roboto mt-3 text-lg leading-normal">
              <b>Tel:</b> +33 7 52 89 95 49
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center max-lg:order-1">
          <Link to="/">
            <img
              src={logoInes}
              alt="Phenix logo"
              width={150}
              height={46}
              className="cursor-pointer rounded-lg bg-white px-2 py-2"
              onClick={scrollToTop}
            />
          </Link>
          <div className="max-lg:mb-3">
            <p className="text-white-400 martian-mono-regular mt-3 w-[400px] text-center text-base leading-7 max-lg:w-[350px] max-lg:text-center">
              Portfolio
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center max-lg:order-3">
          <h4 className="font-montserrat mb-4 mt-2 text-2xl font-medium leading-normal">
            Réseaux Sociaux
          </h4>
          <div className="flex w-32 justify-between">
            <a
              href="https://www.linkedin.com/in/ines-benbrahim-andaloussi-b23502197/"
              target="_blank"
              rel="noopener"
              className="mb-4 rounded-full bg-blue-700 p-3 hover:scale-110"
            >
              <FaLinkedin color="white" size={24} />{" "}
            </a>
            <a
              href="https://www.instagram.com/arch.ines/"
              target="_blank"
              rel="noopener"
              className="mb-4 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-3 hover:scale-110"
            >
              <FaInstagram className="text-white" size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
