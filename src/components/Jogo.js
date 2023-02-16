import styled from "styled-components"
import imagem from "../assets/forca0.png"
export default function Jogo(){
    return(
        <Style>
             <Container>           
                <Img src={imagem}/>
            
                <Button>Escolher Palavra</Button>
            </Container>
        </Style>
    )
}

const Style = styled.div`
    position: relative;
    width: 85%;
    align-items: center;
    margin: auto;
    top: 30px;
    left: 0;
    right: 0;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Img = styled.img`
    width: 400px;
    height: 466.67px;
`
const Button = styled.button`
    position: absolute;
    width: 200px;
    height: 60px;
    top: 40px;
    right: 40px;
    border-radius: 8px;
    background-color: #27AE60;
    color: #ffffff;
    border: none;
;
`