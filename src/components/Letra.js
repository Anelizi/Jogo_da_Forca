import styled from "styled-components";

export default function Letra({alfabeto, setAlfabetoLetra}){
    
    function letra(l){
        
    }

    return(
        <Button disabled={alfabeto.includes(alfabeto)} onclick={() => letra(alfabeto)}>{alfabeto}</Button>
    )
}

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
        &:disabled{
        background-color: #9FAAB5;
        color: #798A9F;
        border: 1px solid #9FAAB5;
    }
`