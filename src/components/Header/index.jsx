import { HeaderContainer, HeaderButton, HeaderLogo } from "./styles";
import LogoSvg from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
    toast.info("Deslogado com sucesso!");
  };

  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={LogoSvg} alt="Logo do Kenzie Hub" />
      </HeaderLogo>
      <HeaderButton isDisabled={true} onClick={() => handleLogout()}>
        Sair
      </HeaderButton>
    </HeaderContainer>
  );
}
