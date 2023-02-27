import { useState } from "react";
import styled from "styled-components";
import alfabeto from "../alfabeto";

export default function Chute({setTexto,texto}) {
  return (
    <Container>
      <Style>
        <H2>Já sei a palavra!</H2>
        <Input
          type="text"
          data-test="guess-input"
          onChange={(e) => setTexto(e.target.value)}
          value={texto}
        />
        <Button data-test="guess-button" onClick="">
          Chutar
        </Button>
      </Style>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  font-family: "Roboto";
`;

const Style = styled.div`
  width: 550px;
  height: auto;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const H2 = styled.h2`
  width: 144px;
  height: 23px;
  font-weight: 400;
  color: #000000;
`;

const Input = styled.input`
  width: 353px;
  height: 40px;
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin: 0 20px 0 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-weight: 700;
  color: #3c76a1;
  background-color: #e1ecf4;
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #7aa7c7;
  }
`;
