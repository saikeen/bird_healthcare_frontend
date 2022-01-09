import { Box, Center, Flex, Square, Text } from '@chakra-ui/react';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Flex className="header" backgroundColor="lightblue">
        <Box>
          <Text>BirdHealthcare</Text>
        </Box>
      </Flex>
      <Flex className="main" backgroundColor="white">
        <Box>
          <Text>BirdHealthcare</Text>
        </Box>
      </Flex>
      <Flex className="footer" backgroundColor="lightblue">
        <Box>
          <Text>footer</Text>
        </Box>
      </Flex>
    </>
  );
};

export default App;
