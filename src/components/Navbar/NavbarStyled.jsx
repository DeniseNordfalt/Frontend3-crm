import styled from "styled-components";

export const Nav = styled.nav`
  background-color: white;
  display: flex;
  flex-direction: column;
  float: left;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: 1px solid black;
  margin: 5px;
`;
