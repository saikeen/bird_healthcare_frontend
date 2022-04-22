import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

const RecordListTableHeaderRowCell: React.FC<{
  text: string;
  minW?: string;
}> = ({ text, minW }) => (
  <GridItem>
    <Box px={6} py={3} minW={minW}>
      <Text>{text}</Text>
    </Box>
  </GridItem>
);

RecordListTableHeaderRowCell.defaultProps = {
  minW: undefined,
};

const RecordListTableHeaderRow: React.FC = () => {
  const bg = 'gray.100';
  const fontWeight = 'bold';
  return (
    <Grid templateColumns="repeat(7, 1fr)" bg={bg} fontWeight={fontWeight}>
      <RecordListTableHeaderRowCell text="日付" />
      <RecordListTableHeaderRowCell text="食事量" />
      <RecordListTableHeaderRowCell text="体重" />
      <RecordListTableHeaderRowCell text="天気" />
      <RecordListTableHeaderRowCell text="室温" />
      <RecordListTableHeaderRowCell text="備考" />
      <RecordListTableHeaderRowCell text="" />
    </Grid>
  );
};

const RecordListTableBodyRowCell: React.FC = () => (
  <GridItem>
    <Box px={6} py={4} minW="100px">
      <Text>text</Text>
    </Box>
  </GridItem>
);

const RecordListTableBodyRow: React.FC = () => (
  <Grid templateColumns="repeat(7, 1fr)">
    <RecordListTableBodyRowCell />
    <RecordListTableBodyRowCell />
    <RecordListTableBodyRowCell />
    <RecordListTableBodyRowCell />
    <RecordListTableBodyRowCell />
    <RecordListTableBodyRowCell />
    <RecordListTableBodyRowCell />
  </Grid>
);

const RecordListTable: React.FC = () => (
  <Box mt="20px" overflowX="scroll" overflowY="hidden" whiteSpace="nowrap">
    <RecordListTableHeaderRow />
    <RecordListTableBodyRow />
  </Box>
);

export default RecordListTable;
