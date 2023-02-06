import styled from "styled-components";
import Header from "../InitialSreen/Header";
import Button from "../Button";
import img from "../../assets/images/logo512.png";
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";
import { useState } from "react";

export default function InfoProduct() {
  const [qtd, setQtd] = useState(1);

  function Count(click) {
    if (click === "Remove" && qtd > 1) {
      setQtd(qtd - 1);
    }
  }

  return (
    <>
      <Header />
      <InfoConteiner>
        <Galery>
          <img src={img} />
        </Galery>
        <Info>
          <ProductDescription>
            Raçao fitness frango e clara de ovo para o seu poodle ficar maromba
            wWWIBISUBCU WBcWBU yiiubviuqeb bievbvliqbeauv gPIOUVRBRPU\BVUA
            BPAUEBEVOU
          </ProductDescription>
          <ProductPrice>R$ 1000000,00</ProductPrice>
          <ProductQuantity>
            <Remove>
              <GoDiffRemoved onClick={() => Count("Remove")} />
            </Remove>
            {qtd}
            <Add>
              <GoDiffAdded onClick={() => setQtd(qtd + 1)} />
            </Add>
          </ProductQuantity>
          <AddToCart>Adicionar ao carrinho</AddToCart>
        </Info>
      </InfoConteiner>
      <Button />
    </>
  );
}

const InfoConteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const Galery = styled.div`
  background-color: #ffffff;
  border: 1px solid grey;
  width: 700px;
  height: 500px;
  border-radius: 9px;
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 500px;
    height: 500px;
  }
`;

const Info = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  width: 700px;
  height: 500px;
`;

const ProductDescription = styled.div`
  width: 700px;
  height: 120px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  color: #463f3a;
`;

const ProductPrice = styled.div`
  width: 300px;
  height: 70px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  font-family: "Fredoka One", cursive;
  font-size: 30px;
  color: #457b9d;
`;

const ProductQuantity = styled.div`
  width: 100px;
  height: 40px;
  background-color: #fefae0;
  margin-bottom: 30px;
  border: 2px solid black;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  color: #affc41;
`;

const AddToCart = styled.div`
  width: 500px;
  height: 75px;
  background-color: #0ead69;
  margin-bottom: 30px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  margin-left: 100px;
  font-family: "Fredoka One", cursive;
  font-size: 30px;
  color: #ffffff;
`;

const Add = styled.div`
  width: auto;
  height: 30px;
  color: black;
  background-color: #ffffff;
`;

const Remove = styled.div`
  width: auto;
  height: 30px;
  color: black;
  background-color: #ffffff;
`;
