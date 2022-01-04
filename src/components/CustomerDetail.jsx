import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { URLContext, CustomerContext, UserContext } from "../App";

import styled from "styled-components";

export const InputEdit = styled.input`
  :read-only {
    border: none;
    ::placeholder {
      color: black;
    }
    outline: none;
  }

  :read-write {
    border: 1px solid blue;
  }
`;

export default function CustomerDetail() {
  const { baseURL } = useContext(URLContext);
  const { customerList } = useContext(CustomerContext);

  const [customerDetail, setCustomerDetail] = useState(null);

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const idAPI = `/api/v1/customers/${id}`;
  const url = `${baseURL}${idAPI}`;

  const token = localStorage.getItem("crm");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  function fetchCustomerData() {
    fetch(url, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetail(data.results);
        console.log(data.results[id].id);
        console.log(data.results);
        console.log(customerList);
      });
  }

  useEffect(() => {
    fetchCustomerData();
  }, []);

  function handleOnDelete() {
    const del = customerDetail[id].id;
    const deleteurl = `${baseURL}/api/v1/customers/${del}/`;
    fetch(deleteurl, {
      method: "DELETE",
      headers: headers,
    }).then((res) => navigate("/home"));
  }

  function handleOnEdit() {
    const edit = customerDetail[id].id;
    const editurl = `${baseURL}/api/v1/customers/${edit}/`;
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber,
    };

    fetch(editurl, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(payload),
    }).then(fetchCustomerData, setRead(true));
  }

  let [read, setRead] = useState(true);
  function makeRead() {
    setRead(false);
  }

  return (
    <div>
      {customerDetail ? (
        <>
          <h2>Customer: {customerDetail[id].name}</h2>

          <label htmlFor="">Name: </label>
          <InputEdit
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={customerDetail[id].name}
            readOnly={read}
            required
          />

          <br />
          <label htmlFor="">Organisation nr: </label>
          <InputEdit
            type="text"
            value={organisationNr}
            onChange={(e) => setOrganisationNr(e.target.value)}
            placeholder={customerDetail[id].organisationNr}
            readOnly={read}
          />

          <br />
          <label htmlFor="">VAT nr: </label>
          <InputEdit
            type="text"
            value={vatNr}
            onChange={(e) => setVatNr(e.target.value)}
            placeholder={customerDetail[id].vatNr}
            readOnly={read}
            pattern="^SE[0-9]{10}$"
          />

          <br />
          <label htmlFor="">Reference: </label>
          <InputEdit
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder={customerDetail[id].reference}
            readOnly={read}
          />
          <br />
          <label htmlFor="">Payment term: </label>
          <InputEdit
            type="text"
            value={paymentTerm}
            onChange={(e) => setPaymentTerm(e.target.value)}
            placeholder={customerDetail[id].paymentTerm}
            readOnly={read}
          />

          <br />
          <label htmlFor="">Website: </label>
          <InputEdit
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder={customerDetail[id].website}
            readOnly={read}
          />

          <br />
          <label htmlFor="">Email: </label>
          <InputEdit
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={customerDetail[id].email}
            readOnly={read}
          />

          <br />
          <label htmlFor="">Phone number: </label>
          <InputEdit
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={customerDetail[id].phoneNumber}
            readOnly={read}
          />

          <p>id for delete: {customerDetail[id].id}</p>

          {/* make the fields input fields, and set to readOnly */}

          <button onClick={handleOnDelete}>Delete customer</button>
          <button onClick={makeRead}>Edit customer</button>
          <button onClick={handleOnEdit} disabled={read}>
            Save changes
          </button>
          <Link to="/home">Go back</Link>
        </>
      ) : (
        "Customer not found"
      )}
    </div>
  );
}
