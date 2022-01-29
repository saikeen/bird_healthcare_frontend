import { Box, Flex, Textarea, Button, Select, Input } from '@chakra-ui/react';
import React from 'react';
import Form from '../../ui/Form';
import NumberInput from '../../ui/NumberInput';

const RecordEditForm: React.FC = () => (
  <>
    <Box display={{ md: 'flex' }}>
      <Box w={{ md: '50%' }}>
        <Form title="名前" component={<Input type="text" disabled />} />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} w={{ md: '50%' }}>
        <Form title="日付" component={<Input type="date" disabled />} />
      </Box>
    </Box>
    <Box display={{ md: 'flex' }} mt={4}>
      <Box w={{ md: '50%' }}>
        <Form
          title="食事量"
          component={
            <NumberInput defaultValue={0} precision={1} step={0.1} min={0} />
          }
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} w={{ md: '50%' }}>
        <Form
          title="体重"
          component={
            <NumberInput defaultValue={0} precision={1} step={0.1} min={0} />
          }
        />
      </Box>
    </Box>
    <Box display={{ md: 'flex' }} mt={4}>
      <Box w={{ md: '50%' }}>
        <Form
          title="天気"
          component={
            <Select defaultValue="">
              <option value="">選択してください</option>
              <option value="sunny">晴</option>
              <option value="cloudy">曇</option>
              <option value="rainy">雨</option>
            </Select>
          }
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} w={{ md: '50%' }}>
        <Form
          title="室温"
          component={
            <NumberInput defaultValue={0} precision={1} step={0.1} min={0} />
          }
        />
      </Box>
    </Box>
    <Flex mt={4}>
      <Form title="備考" component={<Textarea />} />
    </Flex>
    <Flex mt={4} justifyContent="center">
      <Button colorScheme="blue">Submit</Button>
    </Flex>
  </>
);

export default RecordEditForm;
