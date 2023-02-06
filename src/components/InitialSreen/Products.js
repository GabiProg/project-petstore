import styled from "styled-components";
import IMG from "../../assets/images/logo192.png";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <Link to='/product/:productId'>
      <Box>
        <Picture>
          <img src={IMG} />
        </Picture>
        <Description>
          e a description mt bom esse produto recomendo lorem ipsum da Gabs
        </Description>
        <Price>
          <hr />
          R$ 199,90
        </Price>
      </Box>
    </Link>
  );
}

const Box = styled.div`
  width: 210px;
  height: 300px;
  margin-left: 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 9px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
`;

const Picture = styled.div`
  width: 200px;
  height: 180px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;

  > img {
    width: 200px;
    height: 180px;
  }
`;

const Description = styled.div`
  height: 20px;
  margin-top: 8px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Fredoka One", cursive;
  font-size: 15px;
  color: #6b705c;
`;

const Price = styled.div`
  margin-top: 35px;
  margin-left: 10px;
  font-family: "Fredoka One", cursive;
  font-size: 22px;
  color: #457b9d;

  hr {
    margin-right: 10px;
  }
`;
