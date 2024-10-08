import "../style.css";

const AnimeDestaque = () => {
  return (
    <div className="px-4 py-10 flex justify-center items-center ">
          <div className="border rounded-lg relative w-96">
              <div className="absolute left-3 top-3 flex gap-4 items-center">
                  <button className="uppercase px-2 py-1 font-semibold border rounded-full bg-[#AB4967] hover:bg-[#97405a]">Comentar</button>
                  <img src="src\assets\home\save.png" alt="Salvar" className="w-5"/>
              </div>
        <div>
          <img
            src="src\assets\home\jujutsu.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="px-5 py-4">
          <h2 className="font-semibold text-xl uppercase">Anime Destaque</h2>
          <h3 className="">Jujutsu Kaisen 2</h3>
        </div>
      </div>
    </div>
  );
};

export default AnimeDestaque;
