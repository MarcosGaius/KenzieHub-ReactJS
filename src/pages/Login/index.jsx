import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { logUserIn } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import {
  FormContainer,
  FormField,
  LoginFormWrapper,
  PasswordInput,
  RegisterFieldContainer,
} from "./styles";
import Loader from "../../components/Loader";

const schema = yup.object({
  email: yup
    .string()
    .email("Insira um email válido.")
    .required("Email é um campo obrigatório!"),
  password: yup.string().required("Senha é um campo obrigatório!"),
});

export default function Login({ isLoading, setIsLoading }) {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSuccessLogin = (data) => {
    localStorage.clear();
    localStorage.setItem("@kenziehub:token", data.data.token);
    localStorage.setItem("@kenziehub:userId", data.data.user.id);

    toast.success("Login bem sucedido.", {
      onClose: () => {
        setIsLoading(false);
        navigate("/", { replace: true });
      },
      position: "bottom-right",
    });
  };

  const handleLoginFailure = (error) => {
    let notifyMessage = "Erro no Login: tente novamente.";
    if (error.response.status === 401) {
      notifyMessage = "E-mail e/ou senha inválido.";
    }
    setIsLoading((prevState) => !prevState);
    toast.error(notifyMessage);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const loginResponse = await logUserIn(data);

      if (loginResponse.request.status !== 200) {
        throw loginResponse;
      }

      handleSuccessLogin(loginResponse);
    } catch (error) {
      handleLoginFailure(error);
    }
  };

  const navigateToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      {isLoading && <Loader />}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FormContainer>
            <motion.div animate={{ scale: [1.5, 1] }}>
              <Logo />
            </motion.div>
            <motion.div animate={{ opacity: [0, 1] }}>
              <LoginFormWrapper>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormField>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Insira seu email"
                      {...register("email")}
                    />
                    {errors.email?.message && (
                      <small>{errors.email.message}</small>
                    )}
                  </FormField>

                  <FormField>
                    <label htmlFor="password">Senha</label>
                    <PasswordInput>
                      {shouldShowPassword ? (
                        <input
                          type="text"
                          placeholder="Insira sua senha"
                          {...register("password")}
                        />
                      ) : (
                        <input
                          type="password"
                          placeholder="Insira sua senha"
                          {...register("password")}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() =>
                          setShouldShowPassword((prevState) => !prevState)
                        }
                      >
                        {shouldShowPassword ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </button>
                    </PasswordInput>
                    {errors.password?.message && (
                      <small>{errors.password.message}</small>
                    )}
                  </FormField>

                  <Button type="submit">Entrar</Button>
                </form>

                <RegisterFieldContainer>
                  <small>Ainda não possui uma conta? </small>
                  <Button
                    isDisabled={true}
                    onClick={() => navigateToRegisterPage()}
                  >
                    Cadastre-se
                  </Button>
                </RegisterFieldContainer>
              </LoginFormWrapper>
            </motion.div>
          </FormContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
