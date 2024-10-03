export default function List() {
  return (
    <div className="w-48 flex flex-col  items-center bg-[#3C3C3C] px-4 py-6 rounded-lg">
      <div className="flex mb-1 items-center">
        <h2 className="font-semibold uppercase ml-3 text-sm">Liste</h2>
        <img src="src\assets\home\list.png" alt="" className="w-4 ml-2" />
      </div>
      <p className="text-center text-xs sm:text-sm">
        Os animes que você está assistindo atualmente
      </p>
      <button className="uppercase font-semibold bg-[#AB4967] px-4 rounded-full mt-4 text-sm">
        Salvar
      </button>
    </div>
  );
}
