import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const ListHeader = ({ children }: { children: ReactNode }) => (
  <Text fontWeight="500" fontSize="lg" mb={2}>
    {children}
  </Text>
);

export default function Footer() {
  return (
    <Box bg="gray.50" color="gray.700">
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <ListHeader>トリロについて</ListHeader>
            <Link href="/">会社概要（運営会社）</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>プライバシーと利用規約</ListHeader>
            <Link href="/">プライバシーポリシー</Link>
            <Link href="/">利用規約</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align="center"
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            ml: 8,
          }}
        >
          Torilo
        </Flex>
        <Text pt={6} fontSize="sm" textAlign="center">
          © 2022 PocketTool, Inc. All Right Reserved.
        </Text>
      </Box>
    </Box>
  );
}
