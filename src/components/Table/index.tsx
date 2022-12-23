import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useGetProducts } from "../../hooks/dashboard";
import TableListTitle from "../Helpers/TableListTitle";
import TableLabels from "../TableLabels";
import TablePaginator from "./Paginator";
import TableInputSearch from "./TableInputSearch";
import TableItem from "./TableItem";

const currentPage = 5;
const limit = 10;

const Table = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const { data, isLoading, refetch } = useGetProducts(
    currentPage,
    limit,
    searchValue
  );

  const listItems = React.useMemo(() => {
    if (data) return data;
  }, [data]);

  React.useEffect(() => {
    if (searchValue !== "") {
      setTimeout(() => {
        refetch();
      }, 1000);
    }
  }, [searchValue, refetch]);

  return (
    <Box h="100%" maxW="88%" backgroundColor="#FFFFFF" borderRadius="20px">
      <Flex justifyContent="space-between" mt="55px" w="100%">
        <TableListTitle title="Listagem de Produtos" />
        <TableInputSearch setSearchValue={setSearchValue} />
      </Flex>
      <TableLabels />
      {listItems && listItems?.length < 1 ? (
        <Box w="100%" h="100%">
          <Text
            alignItems="center"
            justifyContent="center"
            mt="15%"
            ml="40%"
            fontSize="20px"
            fontFamily="Ubuntu"
          >
            Nenhum registro encontrado
          </Text>
        </Box>
      ) : null}
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <>
          <Box backgroundColor="#FFFFFF">
            {listItems?.map(({ name, status, color, id }) => {
              return (
                <TableItem key={id} name={name} status={status} color={color} />
              );
            })}

            <TablePaginator />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Table;
