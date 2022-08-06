import styled from "styled-components";
import { DefaultButton } from "../Button/styles";
import { LogoContainer } from "../Logo/styles";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 1rem 1rem;

  @media screen and (min-width: 1000px) {
    padding: 1rem 13rem;
  }
`;

export const HeaderLogo = styled(LogoContainer)`
  width: 8rem;

  img {
    width: 100%;
  }
`;

export const HeaderButton = styled(DefaultButton)`
  background-color: rgb(var(--grey-3));
  padding: 0.8rem 1.2rem;
`;
