import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";

export default function App() {
  const [letraEscolhida, setLetraEscolhida] = useState(alfabeto);
  const [palavraSorteada , setPalavraSorteada]= useState([]);
  const [palavra, setPalavra] = useState([]);

  const [tentativas, setTentativas] = useState(0);

  return (
    <>
      <Jogo
        palavras={palavras}
        palavra={palavra}
        setPalavra={setPalavra}
        setLetraEscolhida={setLetraEscolhida}
        setTentativas={setTentativas}
        tentativas={tentativas}
        setPalavraSorteada={setPalavraSorteada}
      />
      <Letras
        palavra={palavra}
        setPalavra={setPalavra}
        letraEscolhida={letraEscolhida}
        setLetraEscolhida={setLetraEscolhida}
        setTentativas={setTentativas}
        tentativas={tentativas}
        setPalavraSorteada={setPalavraSorteada}
        palavrSorteada={palavraSorteada}
      />
    </>
  );
}
