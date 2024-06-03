import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>
        <Flex alignItems="center">
          <Link to="/sale-orders">
            <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>
              Sale Orders
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
