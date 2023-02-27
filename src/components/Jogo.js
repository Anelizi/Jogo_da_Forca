import styled from "styled-components";
import imagem0 from "../assets/forca0.png";
import imagem1 from "../assets/forca1.png";
import imagem2 from "../assets/forca2.png";
import imagem3 from "../assets/forca3.png";
import imagem4 from "../assets/forca4.png";
import imagem5 from "../assets/forca5.png";
import imagem6 from "../assets/forca6.png";

export default function Jogo({
  palavras,  
  palavra,
  setPalavra,
  setLetraEscolhida,
  setTentativas,
  tentativas,
  setPalavraSorteada,
  setCor,
  cor
}) {
  const imagens = [
    imagem0,
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
  ];

  const sordea = Math.floor(Math.random() * palavra.length);
  
  function renderizaPalavra() {
    const palavraSortea = palavras[sordea];
    const palavraE = palavraSortea.split("");
    setPalavraSorteada(palavraE);

    const traco = palavraE.map(() => ' _')
    setPalavra(traco);
  }

  function iniciarJogo() {
    renderizaPalavra();
    setLetraEscolhida([]);
    setTentativas(0);
    setCor('preto')
  }

  return (
    <Style>
      <Container>
        <Img data-test="game-image" src={imagens[tentativas]} alt="imagem da forca" />
        <div>
          <Button data-test="choose-word" onClick={iniciarJogo}>Escolher Palavra</Button>
          <H1 cor={cor} data-test="word">{palavra}</H1>
        </div>
      </Container>
    </Style>
  );
}

const Style = styled.div`
  position: relative;
  width: 85%;
  height: 100%;
  align-items: center;
  margin: auto;
  top: 30px;
  left: 0;
  right: 0;
  font-family: "Roboto";
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Img = styled.img`
  width: 400px;
  height: 467px;
`;

const Button = styled.button`
  position: absolute;
  width: 200px;
  height: 60px;
  top: 40px;
  right: 40px;
  border-radius: 8px;
  background-color: #27ae60;
  color: #ffffff;
  border: none;
  font-weight: 700;
  cursor: pointer;
`;

const H1 = styled.h1`
  position: absolute;
  font-size: 50px;
  font-weight: 700;
  bottom: 40px;
  right: 40px;
  color: ${({cor}) => cor === 'verde' ? '#27AE60' : (cor === 'vermelho' ? '#FF0000' : 'preto' && '#000000')};
`;
