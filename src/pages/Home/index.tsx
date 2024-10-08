import { motion } from "framer-motion";
import BestNotes from "./components/BestNotes";
import ForYou from "./components/ForYou";
import List from "./components/List";
import News from "./components/News";
import Popular from "./components/Popular";
import Recommend from "./components/Recommend";
import Save from "./components/Save";
import Warn from "./components/Warn";
import { useEffect } from "react";
import AnimeDestaque from "./components/AnimeDestaque";
import Shounen from "./components/Shounen";
import Seinei from "./components/Seinen";
import Esporte from "./components/Esporte";
import Mecha from "./components/Mecha";
import Isekai from "./components/Isekai";

export default function Home() {
  useEffect(() => {
    // Força o scroll para o topo quando a página carrega
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Animação de fade-in e slide-up para o logo */}
      <motion.div
        className="absolute z-10 top-28 sm:top-36 md:top-48 left-6 sm:left-10 md:left-20"
        initial={{ opacity: 0, y: 50 }} // Começa transparente e um pouco para baixo
        animate={{ opacity: 1, y: 0 }} // Anima para visível e na posição original
        transition={{ duration: 0.8 }} // Duração da animação
        >

        <img
          src="src/assets/home/logo-dororo.png"
          alt=""
          className="w-40 sm:w-64"
        />
      </motion.div>

      <img src="src/assets/home/background.png" alt="" />

      {/* Animação para as seções Save, List e Recommend */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-evenly md:justify-center md:gap-10 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Duração mais suave
      >
        <Save />
        <List />
        <Recommend />
      </motion.div>

      {/* Exemplo de fade-in para as outras seções */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <ForYou />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <Popular />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <BestNotes />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <Warn />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <News />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <AnimeDestaque />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Shounen />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Seinei />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Isekai />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Esporte />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Mecha />
      </motion.div>
    </div>
  );
}
