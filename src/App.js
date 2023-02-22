import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";

export default function App() {
  const [letraEscolhida, setLetraEscolhida] = useState(alfabeto);
  const [sortear, setSortear] = useState(palavras[Math.floor(Math.random() * palavras.length)]);
  const [palavra, setPalavra] = useState([]);
  const [tentativas, setTentativas] = useState(0);

  return (
    <>
      <Jogo
        sortear={sortear}
        setSortear={setSortear}
        palavra={palavra}
        setPalavra={setPalavra}
        setLetraEscolhida={setLetraEscolhida}
        setTentativas={setTentativas}
        tentativas={tentativas}
      />
      <Letras
        sortear={sortear}
        setSortear={setSortear}
        palavra={palavra}
        letraEscolhida={letraEscolhida}
        setLetraEscolhida={setLetraEscolhida}
        setTentativas={setTentativas}
        tentativas={tentativas}
      />
    </>
  );
}
