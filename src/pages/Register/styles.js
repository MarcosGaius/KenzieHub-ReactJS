import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: rgb(var(--grey-4));
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 2rem 1rem;

  @media screen and (min-width: 425px) {
    padding: 0;
    padding-top: 2rem;
  }
`;

export const RegisterHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  img {
    width: 8rem;
  }

  @media screen and (min-width: 425px) {
    width: 23rem;
  }
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media screen and (min-width: 425px) {
    width: 23rem;
  }

  padding: 1.8rem 1.5rem;
  border-radius: 4px;

  background-color: rgb(var(--grey-3));
  color: rgb(var(--grey-0));

  h1 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgb(var(--grey-1));
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
  }

  select,
  button {
    width: 100%;
  }
`;
