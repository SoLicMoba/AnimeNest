import { useRef } from "react";
import "../style.css";

export default function Seinei() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const advanceList = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 500;
    }
  };

  const regreatList = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 500;
    }
  };

  return (
    <div className="mt-0 py-10 bg-[#292929] flex flex-col relative px-4 transition-all">
      <h2 className="font-bold uppercase text-sm text-white mb-4">
        Seinei
      </h2>
      <div
        className="flex overflow-x-auto no-scrollbar space-x-2  pb-8 transition-all"
        ref={scrollRef}
      >
        <button
          onClick={regreatList}
          className="bg-[#0000001e] hover:bg-[#000000d0] px-2 transition-all absolute left-0 top-20 h-[50%] rounded-tl-lg rounded-bl-lg z-10 hidden md:block"
        >
          &lt;
        </button>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
          <div key={num} className="flex-none">
            <div className="flex flex-col text-start text-xs gap-1 mt-2 hover:scale-105 transition-all cursor-pointer">
              <img src="src/assets/home/hxh.png" alt="hxh" className="w-28" />
              <p className="pl-1 text-white">Hunter x Hunter {num}</p>
            </div>
          </div>
        ))}

        <button
          onClick={advanceList}
          className="bg-[#0000001e] hover:bg-[#000000d0] px-2 transition-all absolute right-0 top-20 h-[50%] rounded-tr-lg rounded-br-lg z-10 hidden md:block"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
