export default function Recommend() {
  return (
    <div className="w-48 flex flex-col items-center bg-[#3C3C3C] px-4 py-6 rounded-lg">
      <div className="flex items-center mb-1">
        <h2 className="font-semibold uppercase sm:ml-4 text-xs">Recomende</h2>
        <img
          src="src\assets\home\recommend.png"
          alt=""
          className="w-4 ml-0 sm:ml-4"
        />
      </div>
      <p className="text-center text-xs sm:text-sm">
        Recomende ou critique os animes assistidos
      </p>
      <button className="uppercase font-semibold bg-[#AB4967] px-4 rounded-full mt-4 text-sm">
        Salvar
      </button>
    </div>
  );
}
