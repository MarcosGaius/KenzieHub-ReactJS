import styled from "styled-components";
import { HeaderContainer } from "../../components/Header/styles";

export const HomeWrapper = styled.div`
  background-color: rgb(var(--grey-4));
  color: rgb(var(--grey-0));

  min-height: 100vh;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  height: 8rem;
  width: 100%;

  border: 1px solid rgb(var(--grey-3));
  padding: 0 1rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 13rem;
  }

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: rgb(var(--grey-0));
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgb(var(--grey-1));
  }
`;

export const MainContent = styled(HeaderContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;

  padding: 3rem 1rem;

  @media screen and (min-width: 1000px) {
    padding: 3rem 13rem;
  }

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: rgb(var(--grey-0));
  }

  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    color: rgb(var(--grey-0));
  }
`;
