import {
  Box,
  Heading,
  Button,
  Textarea,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { eachDayOfInterval, format, startOfMonth } from 'date-fns';
import Select, { SingleValue } from 'react-select';
import React, { useState } from 'react';
import Panel from '../../ui/Panel';

import Form from '../../ui/Form';
import 'react-datepicker/dist/react-datepicker.css';

type Option = {
  value: string;
  label: string;
};

const options = [
  { value: '1', label: '愛鳥01' },
  { value: '2', label: '愛鳥02' },
];

const CreateRecord: React.FC = () => {
  const Today = new Date();
  const [date, setDate] = React.useState(Today);
  registerLocale('ja', ja);

  const [selectedBirdOption, setSelectedBirdOption] = useState<
    SingleValue<Option>
  >(options[0]);
  const [isOpenDialog, setOpenDialog] = useState(false);

  const handleChange = (option: SingleValue<Option>) => {
    setSelectedBirdOption(option);
  };
  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">記録 登録</Heading>
      <Panel mt={4}>
        <Box display={{ md: 'flex' }}>
          <Box flexShrink={0}>
            <Form
              title="記録を作成する愛鳥"
              component={
                <Select
                  styles={{
                    container: () => ({
                      minWidth: 250,
                    }),
                  }}
                  value={selectedBirdOption}
                  options={options}
                  onChange={handleChange}
                />
              }
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Form
              title="日付"
              component={
                <DatePicker
                  locale="ja"
                  dateFormat="yyyy/MM/dd"
                  selected={date}
                  onChange={(selectedDate) => {setDate(selectedDate || Today)}}
                  customInput={
                    <Input h="38px" backgroundColor="#FFF" minW={250} />
                  }
                />
              }
            />
          </Box>
        </Box>
        <Box>
          <Accordion allowToggle >
            <AccordionItem >
              <h2>
                <AccordionButton mt={{md: 3}}>
                  <Box flex='1' textAlign='left'>
                    食事
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton mt={{md: 2}}>
                  <Box flex='1' textAlign='left'>
                    体重
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton mt={{md: 2}}>
                  <Box flex='1' textAlign='left'>
                    環境
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box> 
        <Box mt={{md: 4}}>
          <h2>一言</h2>
          <Textarea placeholder='備考' />
        </Box>
        <Box mt={{md: 4}}>
          <Button as="a" href="/records" colorScheme="teal" size="lg" >保存</Button>
        </Box>
      </Panel>
    </Box>
  );
};

export default CreateRecord;
