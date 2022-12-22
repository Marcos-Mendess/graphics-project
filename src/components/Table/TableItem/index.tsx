import React from "react";
import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import ItemImage from "../../../../public/img/ItemImage.png";
import TagLabel from "./TagLabel";

import ActiveIcon from "../../icons/Active/index";
import { capitalizeFirstLetter } from "../../../utils";

type Props = {
  name: string;
  status: string;
  color: string;
};

const tagLabelsTitle = [
  "banco",
  "sem braço",
  "sala de jantar",
  "madeira natural",
];

const TableItem = ({ name, status, color }: Props) => {
  return (
    <Box mt="32px">
      <Grid templateColumns="1fr 2fr" gap={10} mx="40px">
        <GridItem w="100%" h="100px" borderRadius="9px">
          <Flex>
            <Box ml="40px">
              <Image src={ItemImage} alt="itemImage" />
            </Box>
            <Text fontSize="20px" color="#333333" ml="24px" mt="24px">
              {" "}
              {name}
            </Text>
          </Flex>
          <Divider w="100%" mt="20px" color="red" />
        </GridItem>
        <GridItem w="100%" h="100px" borderRadius="9px">
          <Box>
            <Grid templateColumns="1fr 1fr 1fr" gap={10} mx="40px">
              <Box maxW="17vw">
                <Text
                  fontSize="20px"
                  color="#333333"
                  mr="300px"
                  mt="20px"
                  w="100%"
                  fontFamily="Ubuntu"
                >
                  {" "}
                  {capitalizeFirstLetter(color)}
                </Text>
              </Box>
              <Box>
                {tagLabelsTitle.map((value) => {
                  return <TagLabel title={value} key="value" />;
                })}
              </Box>
              <Flex ml="4.3vw" mt="26px">
                <Text
                  ml="34px"
                  fontFamily="Ubuntu"
                  fontSize="20px"
                  color="#333333"
                >
                  {status}
                </Text>
                <ActiveIcon mt="-4px" />
              </Flex>
            </Grid>
            <Divider w="100%" h="22px" color="red" />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TableItem;
