import styled from "styled-components";
import alfabeto from "../alfabeto";

export default function Letras({
  palavra,
  setPalavra,
  setLetraEscolhida,
  letraEscolhida,
  setTentativas,
  tentativas,
  palavrSorteada
}) {

    function letraEscolha(l){
      setLetraEscolhida([...letraEscolhida,l]);
      if (palavrSorteada.includes(l)){
        letraCorreta(l)
      }else{
        letraErrada(l)
      }
    }

    function letraCorreta(l){
      const palavraMudada = [...palavra];
      palavrSorteada.forEach((letra, i) => {
        if ((palavrSorteada) [i] === l){
          palavraMudada[i] = letra;
        }
      });
      setPalavra(palavraMudada);

      if(!palavrSorteada.includes(' _')){
        return alert("você ganhou");
      }
    }

    function letraErrada(l){
      setTentativas(tentativas + 1);
      if(tentativas === 6){
        return alert("você perdeu");
      }
    }

  return (
    <Container>
      <Style>
      {alfabeto.map(a => (<Button key={a} onClick={() => letraEscolha(a)} disabled={letraEscolhida.includes(a)}>{a}</Button>))} 
      </Style>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  font-family: "Roboto";
`;

const Style = styled.div`
  width: 650px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
        width: 40px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        background-color: #E1ECF4;
        border: 1px solid #7AA7C7;
        color: #39739D;
        border-radius: 3px;
        margin: 5px;
        cursor: pointer;
        text-transform: uppercase;
        &:disabled {
            cursor: default;
            background-color: #9FAAB5;
            color: #798A9F;
            border: 1px solid #9FAAB5;
        }
`
