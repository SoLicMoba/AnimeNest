import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSearch, setIsSearch] = useState<Boolean>(false);
  const [isMenu, setIsMenu] = useState<Boolean>(false);
  const [scrollYF, setScrollYF] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYF(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header
      className={`w-full bg-[#0C171377] fixed z-50 ${
        scrollYF && "bg-[#0C1713dd]"
      }`}
    >
      <div className="md:container md:mx-auto flex items-center select-none px-2">
        <div className="cursor-pointer pr-2 z-50">
          <Link to="/">
            <img src="/icon.png" alt="Icon" className="w-24" />
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-end flex-1">
          <div className="relative">
            <div className="flex">
              <button
                onClick={toggleSearch}
                className={`z-30 md:hidden ${
                  isSearch && "absolute right-0 top-0.5"
                }`}
              >
                <img
                  src="../../src/assets/header/search.svg"
                  alt="Search"
                  className={`size-4 mr-2 cursor-pointer ${
                    isSearch && "invert"
                  }`}
                />
              </button>
              {isSearch && (
                <div className="flex z-20">
                  <input
                    type="text"
                    className="z-20 w-full pl-2 pr-7 py-0 bg-[#D9D0DE] outline-none rounded-full text-sm text-black"
                  ></input>
                </div>
              )}
            </div>
          </div>
          <Link to="/login">
            <img
              src="../../src/assets/header/avatar.svg"
              alt="user"
              className="size-6 cursor-pointer md:hidden"
            />
          </Link>
          <button onClick={toggleMenu} className="flex z-50 md:hidden">
            <img
              src="../../src/assets/header/menu.svg"
              alt="menu"
              className="cursor-pointer"
            />
          </button>
          {isMenu === true ? (
            <nav
              className="
              fixed left-0 top-0
              bg-[#3C3C3C] h-screen w-screen z-40
              p-8 "
            >
              <ul className="text-white mt-20">
                <li className="text-base font-light mb-4 transition-all">
                  Navegação
                </li>
                <Link to="">
                  <li className="hover:underline pl-2 text-lg font-semibold mb-4 hover:bg-[#0C1713] transition-all">
                    Catálogo
                  </li>
                </Link>
                <Link to="">
                  <li className="hover:underline text-lg font-semibold mt-2 pl-2 mb-4 hover:bg-[#0C1713] transition-all">
                    Lista
                  </li>
                </Link>
                <Link to="">
                  <li className="hover:underline text-lg font-semibold mt-2 pl-2 mb-4 hover:bg-[#0C1713] transition-all">
                    Salvos
                  </li>
                </Link>
                <Link to="">
                  <li className="hover:underline text-lg font-semibold mt-2 pl-2 mb-6 hover:bg-[#0C1713] transition-all">
                    Perfil
                  </li>
                </Link>
                <li className="text-base font-light mb-4 transition-all">
                  Extra
                </li>
                <Link to="">
                  <li className="hover:underline text-xl font-semibold mt-2 pl-2 mb-4 bg-[#158528] transition-all">
                    Faça uma Doação 💸
                  </li>
                </Link>
              </ul>
            </nav>
          ) : (
            <nav className="hidden md:flex items-center">
              <ul className="text-white flex gap-5">
                <Link to="">
                  <li className="transition-all font-semibold">Catálogo</li>
                </Link>
                <Link to="">
                  <li className="transition-all font-semibold">Lista</li>
                </Link>
                <Link to="">
                  <li className="transition-all font-semibold">Salvos</li>
                </Link>
                <Link to="">
                  <li className="transition-all font-semibold">Perfil</li>
                </Link>
                <Link to="">
                  <li className="transition-all font-semibold">Doação</li>
                </Link>
              </ul>
              <Link to="/login">
                <img
                  src="../../src/assets/header/avatar.svg"
                  alt="user"
                  className="size-6 cursor-pointer ml-4 mr"
                />
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
