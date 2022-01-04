import styled from "styled-components";
import { FaCat } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border: 1px solid black;
  /* margin: 5px; */
`;

export const HeaderLogo = styled(Link)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const HeaderIcon = styled(FaCat)`
  margin-right: 0.5rem;
  margin-left: 2.5rem;
`;

export const UserDiv = styled.div`
  background-color: white;
  display: block;
  justify-content: flex-end;
  border: 1px solid black;
  margin: 10px;
  p {
    padding: 0 10px;
    font-size: small;
  }

  span {
    display: flex;
    justify-content: flex-end;
    button {
      margin: 3px;
      font-size: 0.5em;
    }
  }
`;
