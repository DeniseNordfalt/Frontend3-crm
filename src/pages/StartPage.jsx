import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginContainer } from "../components/ContainerStyled";
import { URLContext } from "../App";
import InputStyled from "../components/InputStyled";

export default function StartPage() {
  //base url
  const { baseURL } = useContext(URLContext);

  //variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authData = location.search;
    const params = new URLSearchParams(authData);
    checkAuthentication(params);
  }, []);

  //fetches authentication for new user
  function checkAuthentication(params) {
    //auth-data
    const uid = params.get("uid");
    const authToken = params.get("token");
    const authURL = `/auth/users/activate/`;

    const url = `${baseURL}${authURL}`;
    const payload = {
      uid: uid,
      token: authToken,
    };

    if (uid && authToken) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then(navigate("/login"));
    }
  }

  //fetches token on submit
  function handleOnSubmit(e) {
    e.preventDefault();
    const tokenAPI = `/api-token-auth/`;
    const url = `${baseURL}${tokenAPI}`;
    const payload = { email, password };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        localStorage.setItem("crm", token);
        navigate("/home");
      });
  }

  return (
    <div>
      <LoginContainer width="400px" height="420px" border="none">
        <h2>Log in</h2>
        <form onSubmit={handleOnSubmit}>
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
          <button type="submit">Log in</button>
        </form>

        <span>
          <Link to="/create-user">Create user</Link>
          <Link to="lost-password">Lost your password?</Link>
        </span>
      </LoginContainer>
    </div>
  );
}
