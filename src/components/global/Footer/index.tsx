import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="w-full py-5 px-5">
        <ul className="uppercase grid grid-cols-2 sm:grid-cols-4 items-center text-center gap-4 justify-center text-xs">
          <Link to="">
            <li className="border-2 border-[#A04668] rounded-full px-3 py-2">
              catálogo
            </li>
          </Link>
          <Link to="">
            <li className="border-2 border-[#A04668] rounded-full px-3 py-2">
              lista
            </li>
          </Link>
          <Link to="">
            <li className="border-2 border-[#A04668] rounded-full px-3 py-2">
              comentários
            </li>
          </Link>
          <Link to="">
            <li className="border-2 border-[#A04668] rounded-full px-3 py-2">
              Contato
            </li>
          </Link>
        </ul>
      </div>
      <div className="py-5 pb-10 px-6 flex justify-between">
        <ul className="text-gray-300">
          <Link to="">
            <li className="underline">Catálogos</li>
          </Link>
          <Link to="">
            <li className="underline">Filmes</li>
          </Link>
          <Link to="">
            <li className="underline">Luta</li>
          </Link>
          <Link to="">
            <li className="underline">Contato</li>
          </Link>
        </ul>
        <ul className="text-gray-300 text-end">
          <Link to="">
            <li className="underline">Quem somos</li>
          </Link>
          <Link to="">
            <li className="underline">Contribua</li>
          </Link>
          <Link to="">
            <li className="underline">Instagram</li>
          </Link>
          <Link to="">
            <li className="underline">Github</li>
          </Link>
        </ul>
      </div>
      <div className="bg-black p-5 flex justify-between font-bold text-xs">
        <p>Português - BR</p>
        <p>AnimeNest</p>
      </div>
    </div>
  );
}

export default Footer;
