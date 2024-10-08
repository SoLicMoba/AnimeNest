import "../style.css";

export default function Warn() {
  return (
    <div className="mt-0 pt-10 bg-[#0C1713] flex sm:justify-center relative ">
      <div className="px-4 z-30 ">
        <h2 className="font-bold text-3xl uppercase mb-2">Catálogo</h2>
        <p className="text-xs font-semibold w-40">
          Veja o nosso
          <span className="text-[#AB4967]"> catálogo</span> de
          diversos animes com os seus genêros preferidos, liste, comente, 
           <span className="text-[#AB4967]"> SE DIVIRTA!</span>
        </p>
        <button className="mt-6 uppercase font-bold text-lg rounded-full px-6 py-2 transition-all bg-[#AB4967] hover:bg-[#8a354f]">
          Explorar
        </button>
      </div>
      <div className="absolute -right-0 sm:static">
        <div className="flex z-20 relative">
          <div className="absolute -top-16 -right-0 z-10 sm:-top-24 sm:right-0">
            <img
              src="src\assets\home\design-model.png"
              className="size-32 sm:size-72"
            />
          </div>
          <img
            src="src\assets\home\ilustration.png"
            className="w-[190px] h-[300px] object-cover z-20"
          />
        </div>
      </div>
    </div>
  );
}
