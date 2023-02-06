import Header from "../InitialSreen/Header.js";
import Product from "./Product.js";
import styled from "styled-components";

export default function Cart() {
  return (
    <>
      <Header />
      <CartList>
        <Product />
      </CartList>
    </>
  );
}

const CartList = styled.div`
  width: auto;
  height: auto;
  margin-top: 30px;
  margin-left: 30px;
`;
