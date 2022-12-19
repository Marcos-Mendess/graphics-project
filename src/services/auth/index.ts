import { Oauth, OAuthResponse } from "./../../types/login";
import axios from "axios";
import { AvatarImage } from "../../types/menu";

/**
 * Serviço para tela de login
 */

export async function loginOauth({ email, password }: Oauth) {
  const payload: any = {
    email,
    password,
  };

  /*   if (email !== "edu@edu.com" && password !== "1234") {
    throw new Error("Invalid credentials");
  } */
  const response = await axios.get<OAuthResponse>(
    `https://628bf017667aea3a3e387e51.mockapi.io/login`,
    payload
  );
  if (response?.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response?.data;
}

/**
 * Serviço para retornar imagem de avatar
 */
export async function getAvatarImage() {
  const response = await axios.get<AvatarImage>(
    `https://628bf017667aea3a3e387e51.mockapi.io/me`
  );
  if (response?.status !== 200) {
    throw new Error("ocorreu algum erro");
  }
  return response?.data;
}
