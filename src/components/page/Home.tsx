import { Box, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import Panel from '../ui/Panel';

const Home: React.FC = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Flex>
        <Heading size="lg">ホーム</Heading>
      </Flex>
      <Panel mt={4}>ダッシュボード的なもの</Panel>
    </Box>
  );
};

export default Home;
