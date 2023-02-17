import { useState } from 'react';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import palavras from './palavras';

export default function App() {

  const [ativarBotao, setAtivarBotao] = useState(false);

  return (
    <>
      <Jogo palavras={palavras} setAtivarBotao={setAtivarBotao} />
      <Letras  ativarBotao={ativarBotao}/>
    </>
  );
}

