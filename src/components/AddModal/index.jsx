import { ModalBody, ModalButtonWrapper, ModalContainer, ModalField, ModalHeader, ModalWrapper } from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addModalSchema } from "../../validators/AddModal/validator";
import { useContext } from "react";
import { TechContext } from "../../providers/Tech";

export default function AddModal() {
  const { setShowCreateModal, handleTechCreation } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addModalSchema),
  });

  const onSubmit = (data) => {
    handleTechCreation(data);
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <h2>Cadastrar Tecnologia</h2>
          <button
            onClick={() => {
              setShowCreateModal(false);
            }}
          >
            <IoCloseSharp />
          </button>
        </ModalHeader>
        <ModalBody onSubmit={handleSubmit(onSubmit)}>
          <ModalField>
            <label htmlFor="title">Título</label>
            <input placeholder="Nome da tecnologia" {...register("title")} />
            {errors.title?.message && <small>{errors.title.message}</small>}
          </ModalField>
          <ModalField>
            <label>Selecionar status</label>
            <select placeholder="Status para com a tecnologia" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status?.message && <small>{errors.status.message}</small>}
          </ModalField>
          <ModalButtonWrapper>
            <Button type="submit">Cadastrar tecnologia</Button>
          </ModalButtonWrapper>
        </ModalBody>
      </ModalContainer>
    </ModalWrapper>
  );
}
