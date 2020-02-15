import React from "react";
import styled from "styled-components";
import { CheckoutFormProvider } from "../components/FormContext";
import BasicInput from "../components/BasicInput/";

// box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0,0,0,.07), 0 1px 1.5px 0 rgba(0,0,0,.05);
// transition: box-shadow .08s ease-in,color .08s ease-in;
// background: #fff;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default () => (
  <CheckoutFormProvider>
    <Title>My page</Title>
    <BasicInput />
  </CheckoutFormProvider>
);
