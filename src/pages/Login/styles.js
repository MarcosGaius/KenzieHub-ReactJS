import styled from "styled-components";
import { LogoContainer } from "../../components/Logo/styles";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 1rem;

  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: 425px) {
    justify-content: unset;
    padding: 0;
  }

  background-color: rgb(var(--grey-4));
  color: rgb(var(--grey-0));

  h1 {
    font-weight: 700;
    font-size: 1.4rem;
  }

  ${LogoContainer} {
    margin: 2.5rem 0;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 1.8rem 1.5rem;

  border-radius: 4px;

  @media screen and (min-width: 425px) {
    width: 23rem;
  }

  background-color: rgb(var(--grey-3));

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
  }

  button {
    width: 100%;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;

  input {
    width: 100%;
  }

  small {
    margin: 0;
    font-weight: 500;
  }
`;

export const PasswordInput = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(var(--grey-2));
  border-radius: 4px;
  width: 100%;
  transition: all 0.5s;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
    margin-right: 0.8rem;
    padding: 0;
    background-color: transparent;
    border: none;
  }

  svg {
    color: rgb(var(--grey-1));
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  &:focus-within {
    outline: 1px solid rgb(var(--grey-0));
  }
`;

export const RegisterFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  small {
    margin: 1.5rem 0;
  }
`;
