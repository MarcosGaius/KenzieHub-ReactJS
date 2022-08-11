import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader";
import { FormField } from "../Login/styles";
import { HeaderButton } from "../../components/Header/styles";
import { RegisterContainer, RegisterFormWrapper, RegisterHeader, RegisterWrapper } from "./styles";

import { registerUser } from "../../services/api";
import { UserContext } from "../../providers/User";
import { registerSchema } from "../../validators/Register/validator";

export default function Register() {
  const { isLoading, setIsLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const handleBackRedirect = () => {
    navigate("/login");
  };

  const handleSuccessRegistration = () => {
    toast.success("Registro bem sucedido. Realize o Login.", {
      onClose: () => {
        setIsLoading(false);
        navigate("/Login", { replace: true });
      },
      position: "top-right",
    });
  };

  const handleRegistrationFailure = (error) => {
    let notifyMessage = "Erro no Registro: cheque os campos e tente novamente.";
    if (error.response.status === 400) {
      notifyMessage = `Erro no Registro: Verifique os campos preenchidos (${error.response.data.message})`;
    } else if (error.response.status === 401) {
      notifyMessage = `Erro no Registro: Algum campo já está cadastrado (${error.response.data.message})`;
    }
    setIsLoading(false);
    toast.error(notifyMessage);
  };

  const handleRegistration = async (data) => {
    const formattedData = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.courseModule,
    };

    try {
      setIsLoading(true);
      const registerResponse = await registerUser(formattedData);

      if (registerResponse.request.status !== 201) {
        throw registerResponse;
      }

      handleSuccessRegistration(registerResponse);
    } catch (error) {
      handleRegistrationFailure(error);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <RegisterContainer>
            <RegisterWrapper>
              <RegisterHeader>
                <Logo />
                <HeaderButton isDisabled={true} type="button" onClick={() => handleBackRedirect()}>
                  Voltar
                </HeaderButton>
              </RegisterHeader>
              <RegisterFormWrapper>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa!</p>
                <form onSubmit={handleSubmit(handleRegistration)}>
                  <FormField>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" placeholder="Digite aqui seu nome" {...register("name")} />
                    {errors.name?.message && <small>{errors.name.message}</small>}
                  </FormField>
                  <FormField>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Digite aqui seu email" {...register("email")} />
                    {errors.email?.message && <small>{errors.email.message}</small>}
                  </FormField>
                  <FormField>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                    {errors.password?.message && <small>{errors.password.message}</small>}
                  </FormField>
                  <FormField>
                    <label htmlFor="confirmPassword">Confirmar senha</label>
                    <input type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} />
                    {errors.confirmPassword?.message && <small>{errors.confirmPassword.message}</small>}
                  </FormField>
                  <FormField>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" placeholder="Fale sobre você" {...register("bio")} />
                    {errors.bio?.message && <small>{errors.bio.message}</small>}
                  </FormField>
                  <FormField>
                    <label htmlFor="contact">Contato</label>
                    <input type="text" placeholder="Informações de contato" {...register("contact")} />
                    {errors.contact?.message && <small>{errors.contact.message}</small>}
                  </FormField>
                  <FormField>
                    <label htmlFor="courseModule">Selecionar módulo</label>
                    <select {...register("courseModule")}>
                      <option value="Primeiro módulo (Introdução ao Frontend)">1ᵒ Módulo</option>
                      <option value="Segundo módulo (Frontend Avançado)">2ᵒ Módulo</option>
                      <option value="Terceiro módulo (Introdução ao Backend)">3ᵒ Módulo</option>
                      <option value="Quarto módulo (Backend Avançado)">4ᵒ Módulo</option>
                    </select>
                    {errors.courseModule?.message && <small>{errors.courseModule.message}</small>}
                  </FormField>
                  <Button type="submit">Cadastrar</Button>
                </form>
              </RegisterFormWrapper>
            </RegisterWrapper>
          </RegisterContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
