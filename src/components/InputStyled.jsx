import React from "react";
import styled from "styled-components";

export const Input = styled.input``;

export default function InputStyled({
  type,
  value,
  setValue,
  placeholder,
  pattern,
}) {
  return (
    <>
      {/* <label htmlFor=""></label> */}

      <Input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        pattern={pattern}
      />
    </>
  );
}
