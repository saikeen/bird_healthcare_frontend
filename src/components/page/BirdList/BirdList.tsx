import { Box, Heading } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import Panel from '../../ui/Panel';
import { useRecordListQuery } from '../../../generated/graphql';
import BirdListTable from '../../model/Bird/BirdList/BirdListTable';

gql`
  query BirdListQuery {
    bird(id: 1) {
      name
    }
  }
`;

export const BirdList = () => {
   const { loading, error } = useRecordListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">愛鳥一覧</Heading>
      <Panel mt={4}>
        <BirdListTable />
      </Panel>
    </Box>
  );
};
