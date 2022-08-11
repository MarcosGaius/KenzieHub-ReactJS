import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Insira um email válido.").required("Email é um campo obrigatório!"),
  password: yup.string().required("Senha é um campo obrigatório!"),
});
