import React from "react";
import { FormErrorMessage } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

/** Mensagem genérica de erro para os formulários de solicitação da maquininha  */
const ErrorMessage: React.FC<Props> = ({ children }: Props) => {
  return (
    <FormErrorMessage
      color="#FF3A3A"
      fontSize="14px"
      fontWeight="500"
      fontFamily="Montserrat"
      lineHeight="16.94px"
      maxW="340px"
      ml="10px"
    >
      {children}
    </FormErrorMessage>
  );
};

export default ErrorMessage;
