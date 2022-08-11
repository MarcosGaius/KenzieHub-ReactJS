import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createTech, deleteTech, updateTech } from "../../services/api";
import { UserContext } from "../User";

export const TechContext = createContext({});

export default function TechProvider({ children }) {
  const { setIsLoading, setUserInfo } = useContext(UserContext);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState({});

  const handleCreationFailure = (error) => {
    let errorMessage = "Uma tecnologia com esse título já existe.";
    if (error.response.status !== 401) {
      errorMessage = `Houve um erro ao criar a tecnologia. (${error})`;
    }
    toast.error(errorMessage);
    setIsLoading(false);
  };

  const handleCreationSuccess = () => {
    setShowCreateModal(false);
    setIsLoading(false);
    toast.success("Tecnologia criada!");
  };

  const handleTechCreation = async (data) => {
    const token = localStorage.getItem("@kenziehub:token");

    try {
      setIsLoading(true);

      const newTechResponse = await createTech(data, token);

      if (newTechResponse.request.status !== 201) {
        throw newTechResponse;
      }

      handleCreationSuccess();
      setUserInfo((prevInfo) => {
        const userNewInfo = { ...prevInfo };
        userNewInfo.techs.push(newTechResponse.data);
        return userNewInfo;
      });
    } catch (error) {
      handleCreationFailure(error);
    }
  };

  const handleUpdateFailure = (error) => {
    let errorMessage = "Você apenas pode mudar o status da tecnologia.";
    if (error.response.status !== 401) {
      errorMessage = `Houve um erro ao atualizar a tecnologia. (${error})`;
    }
    toast.error(errorMessage);
    setIsLoading(false);
  };

  const handleUpdateSuccess = () => {
    setShowEditModal(false);
    setIsLoading(false);
    toast.success("Tecnologia atualizada!");
  };

  const handleTechUpdate = async (data) => {
    const token = localStorage.getItem("@kenziehub:token");
    const id = selectedTech.id;

    try {
      setIsLoading(true);
      const updateTechResponse = await updateTech(id, data, token);

      if (updateTechResponse.request.status !== 201) {
        throw updateTechResponse;
      }

      handleUpdateSuccess();
      setUserInfo((prevInfo) => {
        const userNewInfo = { ...prevInfo };
        const oldTechIndex = prevInfo.techs.findIndex((tech) => tech.id === id);
        userNewInfo.techs[oldTechIndex] = updateTechResponse.data;
        return userNewInfo;
      });
    } catch (error) {
      handleUpdateFailure(error);
    }
  };

  const handleDeleteFailure = (error) => {
    let errorMessage = "ID de tecnologia não encontrado.";
    if (error.response.status !== 404) {
      errorMessage = `Houve um erro ao deletar a tecnologia. (${error})`;
    }
    toast.error(errorMessage);
    setIsLoading(false);
  };

  const handleDeleteSuccess = () => {
    setShowEditModal(false);
    setIsLoading(false);
    toast.success("Tecnologia deletada!");
  };

  const handleTechDelete = async () => {
    const token = localStorage.getItem("@kenziehub:token");
    const id = selectedTech.id;

    try {
      setIsLoading(true);
      const deleteTechResponse = await deleteTech(id, token);

      if (deleteTechResponse.request.status !== 204) {
        throw deleteTechResponse;
      }

      handleDeleteSuccess();
      setUserInfo((prevInfo) => {
        const userNewInfo = { ...prevInfo };
        const newTechs = prevInfo.techs.filter((tech) => tech.id !== id);
        userNewInfo.techs = newTechs;
        return userNewInfo;
      });
    } catch (error) {
      handleDeleteFailure(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        showCreateModal,
        setShowCreateModal,
        showEditModal,
        setShowEditModal,
        handleTechCreation,
        handleTechUpdate,
        setSelectedTech,
        selectedTech,
        handleTechDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
