import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TechContext } from "../../providers/Tech";
import { useContext } from "react";

import { ModalBody, ModalContainer, ModalField, ModalHeader, ModalWrapper } from "../AddModal/styles";
import Button from "../Button";
import { EditModalButtonWrapper } from "./styles";
import { editModalSchema } from "../../validators/EditModal/validator";
import { toast } from "react-toastify";

export default function EditModal() {
  const { setShowEditModal, selectedTech, handleTechUpdate, handleTechDelete } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolvers: yupResolver(editModalSchema),
  });

  const onSubmit = (data) => {
    if (selectedTech.status === data.status) {
      toast.error("Você deve editar algo!");
      return;
    }
    handleTechUpdate(data);
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <h2>Editar Tecnologia</h2>
          <button
            onClick={() => {
              setShowEditModal(false);
            }}
          >
            <IoCloseSharp />
          </button>
        </ModalHeader>
        <ModalBody onSubmit={handleSubmit(onSubmit)}>
          <ModalField>
            <label htmlFor="title">Título</label>
            <input disabled placeholder="Nome da tecnologia" value={selectedTech.title} />
            {errors.title?.message && <small>{errors.title.message}</small>}
          </ModalField>
          <ModalField>
            <label>Selecionar status</label>
            <select placeholder="Status para com a tecnologia" defaultValue={selectedTech.status} {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status?.message && <small>{errors.status.message}</small>}
          </ModalField>
          <EditModalButtonWrapper>
            <Button type="submit">Confirmar edição</Button>
            <Button type="button" isDisabled={true} onClick={() => handleTechDelete()}>
              Excluir
            </Button>
          </EditModalButtonWrapper>
        </ModalBody>
      </ModalContainer>
    </ModalWrapper>
  );
}
