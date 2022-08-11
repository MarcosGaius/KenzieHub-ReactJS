import { useContext } from "react";
import { TechContext } from "../../providers/Tech";
import { TechListContainer } from "./styles";

export default function TechList({ id, title, status }) {
  const { setShowEditModal, setSelectedTech } = useContext(TechContext);

  return (
    <TechListContainer>
      <button
        onClick={() => {
          setSelectedTech({ id, title, status });
          setShowEditModal(true);
        }}
      >
        <p>{title}</p>
        <small>{status}</small>
      </button>
    </TechListContainer>
  );
}
