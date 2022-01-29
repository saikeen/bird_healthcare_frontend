import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            バドレコ
          </Link>
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link href="/records">記録</Link>
      </Stack>
    </Flex>
  );
};

export default Header;
