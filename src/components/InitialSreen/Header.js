import styled from "styled-components";

export default function Header() {
  return (
    <Top>
      <h1>The PetStore</h1>
    </Top>
  );
}

const Top = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1d3557;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    color: #e63946;
    font-size: 44px;
    font-family: "Fredoka One", cursive;
  }
`;
