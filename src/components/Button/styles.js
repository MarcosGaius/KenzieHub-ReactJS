import styled from "styled-components";

export const DefaultButton = styled.button`
  background-color: ${(props) =>
    props.isDisabled ? `rgb(var(--grey-1))` : `rgb(var(--primary-color))`};
  color: #ffffff;

  border-radius: 4px;
  border: none;
  outline: none;

  font-size: 1rem;
  font-weight: 500;

  padding: 0.8rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? `rgb(var(--grey-2))` : `rgb(var(--primary-color-50))`};
  }
`;
