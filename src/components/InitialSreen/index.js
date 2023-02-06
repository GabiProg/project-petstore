import styled from "styled-components";
import Header from "./Header";
import Products from "./Products";
import Button from "../Button";

export default function InitialScreen() {
  return (
    <Conteiner>
      <Header />
      <ProductsGalery>
        <Products />
      </ProductsGalery>
      <Button/>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const ProductsGalery = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  margin-right: 15px;
`;
