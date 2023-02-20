import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";

export default function App() {
  const [alfabetoLetra, setAlfabetoLetra] = useState(alfabeto);
  const [sortear, setSortear] = useState(
    palavras[Math.floor(Math.random() * palavras.length)]
  );
  const [palavra, setPalavra] = useState([]);

  return (
    <>
      <Jogo
        palavra={palavra}
        setPalavra={setPalavra}
        sortear={sortear} 
        setSortear={setSortear} 
      />
      <Letras
        alfabetoLetra={alfabetoLetra}
        setAlfabetoLetra={setAlfabetoLetra}
      />
    </>
  );
}
