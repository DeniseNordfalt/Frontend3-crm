import styled from "styled-components";

export const Container = styled.div`
  background-color: lightblue;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};

  border: ${(props) => props.border};
  padding: 20px;

  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const LoginContainer = styled(Container)`
  margin: 7em auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);

  h2 {
    padding-top: 40px;
    color: goldenrod;
    font-weight: bold;
    font-size: 2.5em;
    text-align: center;
    text-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.14);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 40px;
  }
  input {
    align-items: center;
    margin: auto;
    text-align: center;
    border-radius: 1.5em;
    width: 80%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.1);
    padding: 10px 20px;
    border: none;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 27px;

    &:focus {
      border: 2px solid #fff !important;
    }
  }
  button {
    cursor: pointer;
    border-radius: 5em;
    color: black;
    background: linear-gradient(to right, goldenrod, white);
    border: 0;
    font-size: 13px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    width: 80%;
    align-items: center;
    text-align: center;
    margin: auto;
    padding: 10px 40px;
  }

  span {
    display: flex;
    justify-content: space-evenly;

    padding-top: 30px;
  }
`;

export const MainContainer = styled(Container)`
  h1 {
    text-align: center;
  }

  table {
    align-items: center;
  }
  th,
  td {
    padding: 5px;
    justify-content: space-between;
  }
`;
