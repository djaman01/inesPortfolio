import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { logoInes } from "../assets/images";

const Header = () => {
  return (
    <header className="font-roboto padding-x w-full py-1">
      <nav className="max-container flex items-center justify-between">
        <Link to="/">
          <img
            className="cursor-pointer"
            src={logoInes}
            alt="Logo InesAnda"
            width={130}
            height={29}
          />
        </Link>

        <div className="mr-24 mt-2 flex flex-1 items-center justify-center gap-14 text-lg leading-normal max-lg:hidden">
          <Link to="/">
            <p className="cursor-pointer text-xl hover:text-slate-gray active:rounded-lg active:bg-[#00ff7f] active:px-2 active:py-1">
              Accueil
            </p>
          </Link>
          <div className="group relative">
            <p className="cursor-pointer text-xl hover:text-slate-gray">
              Portfolio
            </p>
            <div className="font-roboto absolute z-10 hidden w-52 cursor-pointer rounded-lg bg-white font-serif shadow-xl ring-1 ring-slate-900/5 group-hover:block">
              <Link to="/allArtists">
                <p className="mb-3 mt-2 py-1 pl-2 hover:bg-gray-200 active:bg-[#00ff7f]">
                  Projets en école
                </p>
              </Link>
              <Link to="/tableaux">
                <p className="mb-2 py-1 pl-2 hover:bg-gray-200 active:bg-[#00ff7f]">
                  Projets en agence
                </p>
              </Link>
              <Link to="/tableaux">
                <p className="mb-2 py-1 pl-2 hover:bg-gray-200 active:bg-[#00ff7f]">
                  Projet de fin d'études
                </p>
              </Link>
              <Link to="/tableaux">
                <p className="mb-2 py-1 pl-2 hover:bg-gray-200 active:bg-[#00ff7f]">
                  Mémoire de fin d'études
                </p>
              </Link>
            </div>
          </div>

          <Link to="/vendre">
            <p className="cursor-pointer text-xl hover:text-slate-gray active:rounded-lg active:bg-[#00ff7f] active:px-2 active:py-1">
              CV
            </p>
          </Link>

          <Link to="/concept">
            <p className="cursor-pointer rounded-lg px-2 py-1 text-xl hover:text-slate-gray active:rounded-lg active:bg-[#00ff7f] active:px-2 active:py-1">
              Contact
            </p>
          </Link>
        </div>

        <div className="hidden max-lg:block">
          <SideBar className="lg:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
