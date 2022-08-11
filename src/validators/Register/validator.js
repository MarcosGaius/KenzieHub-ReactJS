import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Nome é um campo obrigatório!"),
  email: yup.string().required("Email é um campo obrigatório!").email("Insira um email válido!"),
  password: yup
    .string()
    .required("Senha é um campo obrigatório!")
    .matches(/[A-Z]/, "Sua senha deve conter ao menos uma letra maíscula.")
    .matches(/[a-z]/, "Sua senha deve conter ao menos uma letra minúscula.")
    .matches(/(\d)/, "Sua senha deve conter ao menos um número.")
    .matches(/(\W)|_/, "Sua senha deve conter ao menos um caractere especial.")
    .matches(/.{8,}/, "Sua senha deve conter no mínimo 8 caracteres."),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
  bio: yup.string().required("Bio é um campo obrigatório!"),
  contact: yup.string().required("Contato é um campo obrigatório!"),
  courseModule: yup.string().required("Módulo é um campo obrigatório!"),
});
