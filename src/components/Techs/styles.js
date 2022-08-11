import styled from "styled-components";
import { DefaultButton } from "../Button/styles";

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const TechTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h2 {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const TechButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  padding: 0.5rem;

  background-color: rgb(var(--grey-3));

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TechListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: rgb(var(--grey-3));

  padding: 1rem;
  border-radius: 4px;

  list-style: none;
`;
