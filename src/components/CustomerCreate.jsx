import React, { useState, useContext } from "react";
import { CustomerContext } from "../App";
import { Container } from "./ContainerStyled";
import InputStyled from "./InputStyled";

export default function CustomerCreate({ fetchCustomers }) {
  const { customerList, setCustomerList } = useContext(CustomerContext);

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState(""); //validate this
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    const url = "https://frebi.willandskill.eu/api/v1/customers/";
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
    const token = localStorage.getItem("crm");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }

  function renderInput(
    labelFor,
    label,
    type,
    value,
    setValue,
    placeholder,
    pattern
  ) {
    return (
      <>
        <label htmlFor={labelFor}>{label}</label>

        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          pattern={pattern}
        />
      </>
    );
  }

  return (
    <div>
      <h2>Create a new customer</h2>
      <form onSubmit={handleOnSubmit}>
        <ul>
          <li>
            <label htmlFor="">Name: </label>
            <InputStyled value={name} setValue={setName} required />
          </li>
          <li>
            <label htmlFor="">Organisation Nr: </label>
            <InputStyled value={organisationNr} setValue={setOrganisationNr} />
          </li>
          <li>
            <label htmlFor="">Vat reg nr: </label>
            <InputStyled
              value={vatNr}
              setValue={setVatNr}
              pattern="^SE[0-9]{10}$"
            />
          </li>
          <li>
            <label htmlFor="">Reference: </label>
            <InputStyled value={reference} setValue={setReference} />
          </li>
          <li>
            <label htmlFor="">Payment term: </label>
            <InputStyled
              type="number"
              value={paymentTerm}
              setValue={setPaymentTerm}
            />
          </li>
          <li>
            <label htmlFor="">Website: </label>
            <InputStyled value={website} setValue={setWebsite} />
          </li>
          <li>
            <label htmlFor="">Email: </label>
            <InputStyled value={email} setValue={setEmail} />
          </li>
          <li>
            <label htmlFor="">Phone nr: </label>
            <InputStyled value={phoneNumber} setValue={setPhoneNumber} />
          </li>
          <button type="submit" onClick={fetchCustomers}>
            Create new customer
          </button>
        </ul>
      </form>
    </div>
  );
}
