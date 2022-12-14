import * as yup from "yup";

export const loginValidator = yup.object().shape({
  login: yup
    .string()
    .email("Digite um e-mail válido!")
    .required("Digite um e-mail!"),
  password: yup
    .string()
    .min(3, "A senha deve conter no mínimo 3 caracteres!")
    .required("Digite uma senha!"),
});
