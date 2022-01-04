import React, { useState, useContext } from "react";
import { LoginContainer } from "../components/ContainerStyled";
import InputStyled from "../components/InputStyled";

import { URLContext } from "../App";

export default function UserCreate() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");
  const [organisationName, setOrganisationName] = useState("");

  const { baseURL } = useContext(URLContext);

  function handleOnSubmit(e) {
    e.preventDefault();

    const userAPI = `/auth/users/`;
    const url = `${baseURL}${userAPI}`;

    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind: 1,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <LoginContainer height="650px" width="450px">
        <h2>Create new user</h2>
        <form onSubmit={handleOnSubmit}>
          <InputStyled
            type="text"
            value={firstName}
            setValue={setFirstName}
            placeholder="First name"
          />
          <InputStyled
            type="text"
            value={lastName}
            setValue={setLastName}
            placeholder="Last name"
          />
          <InputStyled
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="Email"
          />
          <InputStyled
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          <InputStyled
            type="text"
            value={organisationName}
            setValue={setOrganisationName}
            placeholder="Name of Organisation"
          />
          {/* TODO */}
          <InputStyled
            type="number"
            value={organisationKind}
            setValue={setOrganisationKind}
            placeholder="Kind of organisation"
          />
          <button type="submit">Create user</button>
        </form>
      </LoginContainer>
    </div>
  );
}
