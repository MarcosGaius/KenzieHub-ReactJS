import { useContext } from "react";
import { UserContext } from "../../providers/User";

import { TechButton, TechListContainer, TechTitle, TechWrapper } from "./styles";
import { BsPlusLg } from "react-icons/bs";
import TechList from "../TechsList";
import { TechContext } from "../../providers/Tech";

export default function Techs() {
  const {
    userInfo: { techs },
  } = useContext(UserContext);

  const { setShowCreateModal } = useContext(TechContext);

  return (
    <TechWrapper>
      <TechTitle>
        <h2>Tecnologias</h2>
        <TechButton
          isDisabled={true}
          onClick={() => {
            setShowCreateModal(true);
          }}
        >
          <BsPlusLg />
        </TechButton>
      </TechTitle>
      <TechListContainer>
        {techs.map((tech) => {
          return <TechList key={tech.id} title={tech.title} status={tech.status} id={tech.id} />;
        })}
      </TechListContainer>
    </TechWrapper>
  );
}
