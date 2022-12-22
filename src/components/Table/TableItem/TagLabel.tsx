import { Tag } from "@chakra-ui/react";
import React from "react";
type Props = {
  title: string;
};
const TagLabel = ({ title }: Props) => {
  return (
    <Tag
      ml="4px"
      mt="12px"
      py="4px"
      px="8px !important"
      bg="#D3D3D3 0% 0% no-repeat padding-box"
      borderRadius="18px"
      fontSize="16px"
      color="#333333"
      fontFamily="Ubuntu"
    >
      {title}
    </Tag>
  );
};

export default TagLabel;
