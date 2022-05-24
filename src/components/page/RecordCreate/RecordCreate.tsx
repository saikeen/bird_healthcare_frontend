import { Box, Heading } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import Panel from '../../ui/Panel';
import { useRecordListQuery } from '../../../generated/graphql';

gql`
  query BirdListQuery {
    bird(id: 1) {
      name
    }
  }
`;

export const RecordCreate = () => {
   const { loading, error } = useRecordListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">愛鳥一覧</Heading>
      <Panel mt={4}>
        <Box></Box>
      </Panel>
    </Box>
  );
};
