import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Button() {
  const style = { color: "#FFFFFF", fontSize: "50px" };

  return (
    <Link to="/cart">
      <ButtonBox>
        <FiShoppingCart style={style} />
      </ButtonBox>
    </Link>
  );
}

const ButtonBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d00000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 70px;
  position: fixed;
  right: 40px;
  bottom: 40px;
`;
