import { Box, Grid, GridItem, Text} from '@chakra-ui/react';
import React from 'react';

const BirdListTableHeaderRowCell: React.FC<{
  text: string;
  minW?: string;
}> = ({ text, minW }) => (
  <GridItem>
    <Box py={3} minW={minW} align="center" bg='gray.100'>
      <Text>{text}</Text>
    </Box>
  </GridItem>
);

BirdListTableHeaderRowCell.defaultProps = {
  minW: undefined,
};

const BirdListTableHeaderRow: React.FC = () => {
  const fontWeight = 'bold';
  return (
    <Grid templateColumns="repeat(7, 1fr)" fontWeight={fontWeight}>
      <BirdListTableHeaderRowCell text="日付" />
    </Grid>
  );
};

const BirdListTableBodyRowCell: React.FC = () => (
  <GridItem>
    <Box py={3} align="center" minW="100px">
      <Text>text</Text>
    </Box>
  </GridItem>
);

const BirdListTableBodyRow: React.FC = () => (
  <Grid templateColumns="repeat(7, 1fr)">
    <BirdListTableBodyRowCell />
  </Grid>
);

const BirdListTable: React.FC = () => (
  <Box mt="20px" overflowX="hidden" overflowY="hidden" whiteSpace="nowrap">
    <BirdListTableHeaderRow />
    <BirdListTableBodyRow />
  </Box>
);

export default BirdListTable;