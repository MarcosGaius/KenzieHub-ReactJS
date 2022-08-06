import LogoSvg from "../../assets/Logo.svg";
import { LogoContainer } from "./styles";

export default function Logo() {
  return (
    <LogoContainer>
      <img src={LogoSvg} alt="Logo da Kenzie Hub" />
    </LogoContainer>
  );
}
