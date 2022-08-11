import * as yup from "yup";

export const addModalSchema = yup.object({
  title: yup.string().required("Título é um campo obrigatório!"),
  status: yup.string().required("Status é um campo obrigatório!"),
});
