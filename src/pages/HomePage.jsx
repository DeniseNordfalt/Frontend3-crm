import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { URLContext, CustomerContext, UserContext } from "../App";
import { MainContainer, Container } from "../components/ContainerStyled";
import { Header, Navbar, Footer } from "../components";
import CustomerCreate from "../components/CustomerCreate";

export default function HomePage() {
  //contexts
  const { baseURL } = useContext(URLContext);
  const { customerList, setCustomerList } = useContext(CustomerContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchCustomers();
    fetchUser();
  }, []);

  function fetchCustomers() {
    const customerAPI = `/api/v1/customers/`;
    const url = `${baseURL}${customerAPI}`;
    const token = localStorage.getItem("crm");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch(url, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  function fetchUser() {
    const userAPI = `/api/v1/me/`;
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
  }

  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <MainContainer width="100%">
        <h1>Customers</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone nr</th>
            </tr>
          </thead>
          <tbody>
            {customerList &&
              customerList.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td key={index}>
                      <Link to={`/customers/${index}`}>{item.name}</Link>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </MainContainer>
      <Container width="100%">
        <CustomerCreate fetchCustomers={fetchCustomers} />
      </Container>
      {/* <Footer /> */}
    </div>
  );
}
