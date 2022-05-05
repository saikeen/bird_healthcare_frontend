import { Box, Heading, Input } from '@chakra-ui/react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { startOfMonth } from 'date-fns';
import Select, { SingleValue } from 'react-select';
import { useState } from 'react';
import { gql } from '@apollo/client';
import Panel from '../../ui/Panel';
import 'react-datepicker/dist/react-datepicker.css';
import Form from '../../ui/Form';
import RecordListTable from '../../model/Record/RecordList/RecordListTable';
import { useRecordListQuery } from '../../../generated/graphql';

registerLocale('ja', ja);

gql`
  query RecordListQuery {
    bird(id: 1) {
      name
    }
  }
`;

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
  const handleChange = (option: SingleValue<Option>) => {
    setSelectedBirdOption(option);
  };

  const { loading, error, data } = useRecordListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">記録 一覧{data?.bird.name}</Heading>
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
