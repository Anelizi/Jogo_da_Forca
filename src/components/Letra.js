import styled from "styled-components";

export default function Letra({alfabeto,  ativarBotao}){
    
    return(
        <Style>
            <button disabled={!ativarBotao}>{alfabeto}</button>
        </Style>
    )
}

const Style = styled.div`
    button{ 
        width: 40px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        background-color: #E1ECF4;
        border: 1px solid #7AA7C7;
        color: #798A9F;
        border-radius: 3px;
        margin: 5px;
        cursor: pointer;
        text-transform: uppercase;
    }
    button:disabled{
        background-color: #9FAAB5;
    }
`