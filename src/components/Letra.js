import styled from "styled-components";

export default function Letra({alfabeto,alfabetoLetra, setAlfabetoLetra}){
    
    function letraEscolhida(l){
        setAlfabetoLetra([...alfabetoLetra, l])
    }

    return(
        <Button onClick={() => letraEscolhida(alfabeto)} disabled={alfabetoLetra.includes(alfabeto)} >{alfabeto}</Button>
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
        &:disabled {
            cursor: default;
            background-color: #9FAAB5;
            color: #798A9F;
            border: 1px solid #9FAAB5;
        }
`