import styled from "styled-components";

export const TechListContainer = styled.li`
  display: flex;

  border-radius: 4px;

  background-color: rgb(var(--grey-4));

  transition: all 0.3s;

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding: 1rem;
    border-radius: 4px;
    border: 0;

    background-color: transparent;
    cursor: pointer;
  }

  p {
    font-weight: 600;
    font-size: 0.9rem;
  }

  small {
    font-weight: 500;
    transition: all 0.3s;
  }

  &:hover {
    background-color: rgb(var(--grey-2));
    cursor: pointer;

    small {
      color: rgb(var(--grey-0));
    }
  }
`;
