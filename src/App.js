import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import Chute from "./components/Chute";

export default function App() {
  const [letraEscolhida, setLetraEscolhida] = useState(alfabeto);
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [palavra, setPalavra] = useState([]);
  const [tentativas, setTentativas] = useState(0);
  const [cor, setCor] = useState("");
  const [texto, setTexto] = useState("");

  return(
    <>
      <Jogo
        cor={cor}
        setCor={setCor}
        palavras={palavras}
        palavra={palavra}
        setPalavra={setPalavra}
        setLetraEscolhida={setLetraEscolhida}
        setTentativas={setTentativas}
        tentativas={tentativas}
        setPalavraSorteada={setPalavraSorteada}
      />
      <Letras
        setCor={setCor}
        palavra={palavra}
        setPalavra={setPalavra}
        letraEscolhida={letraEscolhida}
        setLetraEscolhida={setLetraEscolhida}
        setTentativas={setTentativas}
        tentativas={tentativas}
        setPalavraSorteada={setPalavraSorteada}
        palavrSorteada={palavraSorteada}
      />
      <Chute
        setLetraEscolhida={setLetraEscolhida}
        setTentativas={setTentativas}
        setPalavra={setPalavra}
        palavra={palavra}
        tentativas={tentativas}
        texto={texto} 
        setTexto={setTexto}
        palavrSorteada={palavraSorteada}
        setCor={setCor}
      />
    </>
  );
}
