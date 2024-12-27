import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Provider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
