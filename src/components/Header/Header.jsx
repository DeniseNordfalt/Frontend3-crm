import React from "react";

import { HeaderIcon, HeaderLogo, HeaderStyled, UserDiv } from "./HeaderStyled";
import UserInfo from "../UserInfo";


export default function Header() {
  return (
    <HeaderStyled>
      <HeaderLogo to="/">
        <HeaderIcon />
      </HeaderLogo>

      <UserDiv>
        <UserInfo />
      </UserDiv>
    </HeaderStyled>
  );
}
