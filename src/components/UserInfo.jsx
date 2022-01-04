import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URLContext, UserContext } from "../App";

export default function UserInfo() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { baseURL } = useContext(URLContext);
  const userAPI = `/auth/users/me/`;

  useEffect(() => {
    const url = `${baseURL}${userAPI}`;
    const token = localStorage.getItem("crm");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch(url, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [baseURL, setUser, userAPI]);

  function handleOnLogout() {
    localStorage.removeItem("crm");
    navigate("/login");
  }

  return (
    <div>
      {user && (
        <>
          <p>
            Logged in as: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email} </p>
          <span>
            <button onClick={handleOnLogout}>Log out</button>
          </span>
        </>
      )}
    </div>
  );
}
