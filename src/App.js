import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";

export default function App() {
  const [alfabetoLetra, setAlfabetoLetra] = useState(alfabeto);
  const [palavra, setPalavra] = useState([]);

  return (
    <>
      <Jogo
        palavras={palavras}
        palavra={palavra}
        setPalavra={setPalavra}
        setAlfabetoLetra={setAlfabetoLetra}
      />
      <Letras
        alfabetoLetra={alfabetoLetra}
        setAlfabetoLetra={setAlfabetoLetra}
      />
    </>
  );
}
