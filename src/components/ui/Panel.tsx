import React from 'react';
import { Box, ChakraComponent } from '@chakra-ui/react';

const MyPanel: ChakraComponent<'div'> = ({ children, ...rest }) => (
  <Box
    backgroundColor="white"
    border="1px solid #e0e0e0"
    borderRadius="5"
    padding="24px"
    {...rest}
  >
    {children}
  </Box>
);

export default MyPanel;
