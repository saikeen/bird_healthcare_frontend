import { Box, Grid, GridItem, Heading} from '@chakra-ui/react';
import React from 'react';

const RecordListTableHeaderRowCell: React.FC<{
    name: string;
  }> = ({name}) => (
    <GridItem>
      <Box px={6} py={3} h={40} borderWidth='1px' >
        <Heading size='md'>{name}</Heading>
        
      </Box>
    </GridItem>
  );
  
const RecordListTableHeaderRow: React.FC = () => {
    return (
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <RecordListTableHeaderRowCell name="bird1" />
        <RecordListTableHeaderRowCell name="bird2" />
        <RecordListTableHeaderRowCell name="bird3" />
      </Grid>
    );
  };

const BirdListTable: React.FC = () => (
  <Box mt="10px"  whiteSpace="nowrap">
    <RecordListTableHeaderRow />
  </Box>
);

export default BirdListTable;