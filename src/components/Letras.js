import styled from "styled-components";
import Letra from "./Letra";


export default function Letras({alfabetoLetra, setAlfabetoLetra}){
    return(
        <Container>
            <Style>
             {alfabetoLetra.map((a)=><Letra key={a} setAlfabetoLetra={setAlfabetoLetra}  alfabeto={a}/>)}
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

