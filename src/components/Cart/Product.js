import styled from "styled-components";
import picture from "../../assets/images/logo192.png";

export default function Product() {
  return (
    <ProductBox>
      <ProductPicture>
        <img src={picture} />
      </ProductPicture>
      <ProductName>Ração cara</ProductName>
      <ProductPrice>199,99</ProductPrice>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  width: 700px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 9px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductPicture = styled.div`
    > img{
        width: 100px;
        height: 100px;
    }
`;
const ProductName = styled.div``;
const ProductPrice = styled.div``;
