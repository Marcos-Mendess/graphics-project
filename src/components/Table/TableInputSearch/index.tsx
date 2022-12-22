import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const TableInputSearch = () => {
  return (
    <InputGroup
      maxW="388px"
      mr="40px"
      h="60px"
      alignItems="center !important"
      justifyContent="center"
      mt="55px"
      bg="#F3F5F6 0% 0% no-repeat padding-box !important"
    >
      <Input
        placeholder="Pesquisar produtos"
        type="search"
        h="60px"
        fontSize="20px"
        fontFamily="Ubuntu"
        color="#333333"
        outline="transparent solid 2px "
        _placeholder={{ color: "none", fontWeight: "normal" }}
        borderWidth="1px"
      ></Input>
      <InputRightElement
        mt="10px"
        mr="20px"
        /* eslint-disable-next-line react/no-children-prop */
        children={<SearchIcon />}
      />
    </InputGroup>
  );
};

export default TableInputSearch;
