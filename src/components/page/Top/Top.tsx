import { Box, Heading } from '@chakra-ui/react';
import Panel from '../../ui/Panel';

export const Top = () => {
  const title = 'ホーム';

  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">{title}</Heading>
      <Panel mt={4}>aaa</Panel>
    </Box>
  );
};
