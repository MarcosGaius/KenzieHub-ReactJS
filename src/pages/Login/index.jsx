import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FormContainer, FormField, LoginFormWrapper, PasswordInput, RegisterFieldContainer } from "./styles";

import { logUserIn } from "../../services/api";
import { UserContext } from "../../providers/User";
import { loginSchema } from "../../validators/Login/validator";

export default function Login() {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const { isLoading, setIsLoading, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleSuccessLogin = (data) => {
    localStorage.clear();
    localStorage.setItem("@kenziehub:token", data.data.token);
    localStorage.setItem("@kenziehub:userId", data.data.user.id);

    setIsLoading(false);
    setUserInfo(data);
    navigate("/", { replace: true });

    toast.success("Login bem sucedido.", {
      position: "bottom-right",
    });
  };

  const handleLoginFailure = (error) => {
    let notifyMessage = "Erro no Login: tente novamente.";
    if (error.response.status === 401) {
      notifyMessage = "E-mail e/ou senha inválido.";
    }
    setIsLoading(false);
    toast.error(notifyMessage);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const loginResponse = await logUserIn(data);
      console.log("~ loginResponse", loginResponse);

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
                    <input type="email" placeholder="Insira seu email" {...register("email")} />
                    {errors.email?.message && <small>{errors.email.message}</small>}
                  </FormField>

                  <FormField>
                    <label htmlFor="password">Senha</label>
                    <PasswordInput>
                      {shouldShowPassword ? (
                        <input type="text" placeholder="Insira sua senha" {...register("password")} />
                      ) : (
                        <input type="password" placeholder="Insira sua senha" {...register("password")} />
                      )}
                      <button type="button" onClick={() => setShouldShowPassword((prevState) => !prevState)}>
                        {shouldShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </button>
                    </PasswordInput>
                    {errors.password?.message && <small>{errors.password.message}</small>}
                  </FormField>

                  <Button type="submit">Entrar</Button>
                </form>

                <RegisterFieldContainer>
                  <small>Ainda não possui uma conta? </small>
                  <Button isDisabled={true} onClick={() => navigateToRegisterPage()}>
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
