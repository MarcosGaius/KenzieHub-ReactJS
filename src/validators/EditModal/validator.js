import * as yup from "yup";

export const editModalSchema = yup.object({
  status: yup.string().required("Status é um campo obrigatório!"),
});
