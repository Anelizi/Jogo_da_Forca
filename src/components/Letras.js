import styled from "styled-components";
import Letra from "./Letra";
import alfabeto from "../alfabeto";


export default function Letras({alfabetoLetra, setAlfabetoLetra}){
    return(
        <Container>
            <Style>
             {alfabeto.map((a)=><Letra key={a} alfabetoLetra={alfabetoLetra} setAlfabetoLetra={setAlfabetoLetra}  alfabeto={a}/>)}
            </Style>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    font-family: 'Roboto';
`

const Style = styled.div`
    width: 650px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
`

