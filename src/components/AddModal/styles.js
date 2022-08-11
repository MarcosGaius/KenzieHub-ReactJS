import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: rgb(var(--grey-4), 0.8);
`;

export const ModalContainer = styled.div`
  width: 100%;
  min-height: 18rem;

  background-color: rgb(var(--grey-3));

  @media screen and (min-width: 500px) {
    outline: 2px solid rgb(var(--grey-2));
    width: 22rem;
    border-radius: 4px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;

  padding: 0 1rem;

  background-color: rgb(var(--grey-2));
  color: rgb(var(--grey-0));

  @media screen and (min-width: 500px) {
    border-radius: 4px 4px 0 0;
  }

  h2 {
    font-weight: 700;
    font-size: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    width: 25px;
    height: 25px;

    background-color: transparent;
    outline: none;
    border: none;

    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;

      color: rgb(var(--grey-1));

      transition: all 0.3s;

      &:hover {
        color: rgb(var(--grey-0));
      }
    }
  }
`;

export const ModalBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    color: rgb(var(--grey-0));
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 100%;
  }
`;
