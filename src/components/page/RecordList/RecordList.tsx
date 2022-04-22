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
import Panel from '../../ui/Panel';

import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../../ui/Modal';
import RecordEditForm from '../../model/record/RecordEditForm';
import Form from '../../ui/Form';
import RecordListTable from '../../model/record/RecordList/RecordListTable';

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

export const RecordList = () => {
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
        <RecordListTable />
      </Panel>
    </Box>
  );
};
