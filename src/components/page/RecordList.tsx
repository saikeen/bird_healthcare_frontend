import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Heading,
  Flex,
  Button,
  Center,
} from '@chakra-ui/react';
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import Select, { SingleValue } from 'react-select';
import React, { useState } from 'react';
import Panel from '../ui/Panel';

type Option = {
  value: string;
  label: string;
};
const defaultOption: Option = { value: '', label: '愛鳥を選択してください' };
const options = [
  defaultOption,
  { value: '1', label: '愛鳥01' },
  { value: '2', label: '愛鳥02' },
];

const RecordList: React.FC = () => {
  const [selectedBirdOption, setSelectedBirdOption] =
    useState<SingleValue<Option>>(defaultOption);
  const handleChange = (option: SingleValue<Option>) => {
    setSelectedBirdOption(option);
  };

  const isSelected = selectedBirdOption !== defaultOption;

  const today = new Date();

  return (
    <Box bg="gray.100" p={4}>
      <Box display={{ md: 'flex' }}>
        <Box w={{ md: '50%' }}>
          <Heading size="lg">健康管理表</Heading>
        </Box>
        <Flex
          mt={{ base: 4, md: 0 }}
          w={{ md: '50%' }}
          justifyContent="flex-end"
        >
          <Button colorScheme="blue">PDFエクスポート</Button>
        </Flex>
      </Box>
      <Panel mt={4}>
        <Flex>
          <Box w={{ base: '100%', md: '250px' }}>
            <Select
              value={selectedBirdOption}
              options={options}
              onChange={handleChange}
            />
          </Box>
        </Flex>
        <Box mt={4}>
          {isSelected ? (
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
                    <Th minW="80px"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {eachDayOfInterval({
                    start: startOfMonth(today),
                    end: endOfMonth(today),
                  }).map((day, i) => (
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
                          size={'xs'}
                          colorScheme={'teal'}
                          as="a"
                          href={`/records/${i}/edit`}
                        >
                          編集
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          ) : (
            <Center>
              記録を表示する愛鳥が選択されていません。上部のセレクトボックスから愛鳥を選択いただくか、愛鳥データの登録を行ってください。
            </Center>
          )}
        </Box>
      </Panel>
    </Box>
  );
};

export default RecordList;
