import { Box, Heading, Input, Button} from '@chakra-ui/react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { gql } from '@apollo/client';
import React from 'react';
import Panel from '../../ui/Panel';
import Form from '../../ui/Form';
import { useRecordListQuery } from '../../../generated/graphql';

registerLocale('ja', ja);

gql`
  query RecordCreateQuery {
    bird(id: 1) {
      name
    }
  }
`;

export const RecordCreate = () => {
  const Today = new Date();
  const [date, setDate] = React.useState(Today);

   const { loading, error } = useRecordListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">愛鳥 登録</Heading>
      <Panel mt={4}>
          <Box>
            <Form
              title="愛鳥名"
              component={
                <Input placeholder='愛鳥の名前' />
              }
            />
          </Box>
          <Box mt={{ base: 4, md: 4 }}>
            <Form
              title="誕生日" 
              component={
              <DatePicker 
                locale='ja'
                dateFormat="yyyy/MM/dd"
                selected={date}
                onChange={selectedDate => {setDate(selectedDate || Today)}}
                customInput={
                  <Input h="38px" backgroundColor="#FFF" minW={250} />
                }
              />}              
            />
          </Box>
          <Box mt={{base: 8, md: 8}} align="center">
            <Button as="a" href="/records" colorScheme="teal" size="lg" w="60">登録</Button>
          </Box>
      </Panel>
    </Box>
  );
};
