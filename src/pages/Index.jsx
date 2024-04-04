import { Box, Heading, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <Flex bg="gray.100" p={4} alignItems="center">
      <Heading size="xl">My Notes</Heading>
      <Spacer />
      <IconButton icon={<FaPlus />} aria-label="Add note" variant="outline" />
    </Flex>
  );
};

const Index = () => {
  return (
    <Box>
      <Header />
      <Box p={4}>{}</Box>
    </Box>
  );
};

export default Index;
