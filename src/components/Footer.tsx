import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Flex
      bg="white"
      justifyContent="center"
      alignItems="center"
      direction="column"
      boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
      padding={4}
    >
      <HStack spacing={8} mb={8}>
        <Text color="gray.400">Privacy</Text>
        <Text color="gray.400">Terms of Use</Text>
      </HStack>
      <Flex width="100%" justifyContent="center" wrap="wrap">
        <Text width="50%" textAlign="center" color="gray.600" fontSize="sm">
          Copyright © 2022 PocketTool, Inc. All Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
