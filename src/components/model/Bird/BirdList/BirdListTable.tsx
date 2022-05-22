import { Box, Grid, GridItem, Text} from '@chakra-ui/react';
import React from 'react';

const BirdListTableHeaderRowCell: React.FC<{
  text: string;
  minW?: string;
}> = ({ text, minW }) => (
  <GridItem>
    <Box px={6} py={3} minW={minW} >
      <Text>{text}</Text>
    </Box>
  </GridItem>
);

BirdListTableHeaderRowCell.defaultProps = {
  minW: undefined,
};

const BirdListTableHeaderRow: React.FC = () => {
  const bg = 'gray.100'
  const fontWeight = 'bold';
  return (
    <Grid templateColumns="repeat(3, 1fr)" bg={bg}  fontWeight={fontWeight}>
      <BirdListTableHeaderRowCell text="名前" />
      <BirdListTableHeaderRowCell text="誕生日" />
      <BirdListTableHeaderRowCell text="" />
    </Grid>
  );
};

const BirdListTableBodyRowCell: React.FC = () => (
  <GridItem>
    <Box px={6} py={3} minW="100px">
      <Text>text</Text>
    </Box>
  </GridItem>
);

const BirdListTableBodyRow: React.FC = () => (
  <Grid templateColumns="repeat(3, 1fr)">
    <BirdListTableBodyRowCell />
    <BirdListTableBodyRowCell />
    <BirdListTableBodyRowCell />
  </Grid>
);

const BirdListTable: React.FC = () => (
  <Box mt="20px" overflowX="scroll" overflowY="hidden" whiteSpace="nowrap">
    <BirdListTableHeaderRow />
    <BirdListTableBodyRow />
  </Box>
);

export default BirdListTable;