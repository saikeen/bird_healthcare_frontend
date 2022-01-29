import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Heading,
  Button,
  Center,
  Input,
} from '@chakra-ui/react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { eachDayOfInterval, format, startOfMonth } from 'date-fns';
import Select, { SingleValue } from 'react-select';
import React, { useState } from 'react';
import Panel from '../ui/Panel';

import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../ui/Modal';
import RecordEditForm from '../model/Record/RecordEditForm';
import Form from '../ui/Form';

registerLocale('ja', ja);

type Option = {
  value: string;
  label: string;
};

const options = [
  { value: '1', label: '愛鳥01' },
  { value: '2', label: '愛鳥02' },
];

type DisplayCondition = {
  startDate: Date | null;
  endDate: Date | null;
};

const RecordList: React.FC = () => {
  const today = new Date();
  const [displayCondition, setDisplayCondition] = useState<DisplayCondition>({
    startDate: startOfMonth(today),
    endDate: today,
  });
  const [selectedBirdOption, setSelectedBirdOption] = useState<
    SingleValue<Option>
  >(options[0]);
  const [isOpenDialog, setOpenDialog] = useState(false);

  const handleChange = (option: SingleValue<Option>) => {
    setSelectedBirdOption(option);
  };

  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">記録 一覧</Heading>
      <Panel mt={4}>
        <Box display={{ md: 'flex' }}>
          <Box flexShrink={0}>
            <Form
              title="記録を表示する愛鳥"
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
              title="日付(範囲)"
              component={
                <DatePicker
                  locale="ja"
                  dateFormat="yyyy/MM/dd"
                  startDate={displayCondition.startDate}
                  endDate={displayCondition.endDate}
                  maxDate={today}
                  onChange={(dates: [Date | null, Date | null]) => {
                    setDisplayCondition({
                      startDate: dates[0],
                      endDate: dates[1],
                    });
                  }}
                  selectsRange
                  isClearable
                  customInput={
                    <Input h="38px" backgroundColor="#FFF" minW={250} />
                  }
                />
              }
            />
          </Box>
        </Box>
        <Box mt={4}>
          {selectedBirdOption ? (
            <Box overflowX="scroll">
              <Table variant="simple">
                <Thead>
                  <Tr bg="gray.100">
                    <Th minW="140px">日付</Th>
                    <Th minW="90px">食事量</Th>
                    <Th minW="80px">体重</Th>
                    <Th minW="80px">天気</Th>
                    <Th minW="80px">室温</Th>
                    <Th minW="80px">備考</Th>
                    <Th minW="80px" />
                  </Tr>
                </Thead>
                <Tbody>
                  {eachDayOfInterval({
                    start: displayCondition.startDate || today,
                    end: displayCondition.endDate || today,
                  }).map((day) => (
                    <Tr>
                      <Td>{format(day, 'yyyy/MM/dd')}</Td>
                      <Td>0.0</Td>
                      <Td>0.0</Td>
                      <Td>晴</Td>
                      <Td>0.0</Td>
                      <Td maxW="200px">
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                      </Td>
                      <Td>
                        <Button
                          size="xs"
                          colorScheme="teal"
                          onClick={() => setOpenDialog(true)}
                        >
                          編集
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Modal
                isOpen={isOpenDialog}
                onClose={() => setOpenDialog(false)}
                title="記録 編集"
                component={<RecordEditForm />}
              />
            </Box>
          ) : (
            <Center>
              記録を表示する愛鳥データが登録されていません。愛鳥登録画面から愛鳥データの登録を行ってください。
            </Center>
          )}
        </Box>
      </Panel>
    </Box>
  );
};

export default RecordList;
