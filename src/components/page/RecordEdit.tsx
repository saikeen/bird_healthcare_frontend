import {
  Box,
  Heading,
  Flex,
  Textarea,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import Panel from '../ui/Panel';

const RecordEdit: React.FC = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Box display={{ md: 'flex' }}>
        <Box w={{ md: '50%' }}>
          <Heading size="lg">健康管理 編集</Heading>
        </Box>
        <Flex
          mt={{ base: 4, md: 0 }}
          w={{ md: '50%' }}
          justifyContent="flex-end"
        ></Flex>
      </Box>
      <Panel mt={4}>
        <Box display={{ md: 'flex' }}>
          <Box w={{ md: '25%' }}>
            <FormControl>
              <FormLabel htmlFor="email">食事量</FormLabel>
              <NumberInput defaultValue={0} precision={1} step={0.1} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} w={{ md: '25%' }}>
            <FormControl>
              <FormLabel htmlFor="email">体重</FormLabel>
              <NumberInput defaultValue={0} precision={1} step={0.1} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} w={{ md: '25%' }}>
            <FormControl>
              <FormLabel htmlFor="email">天気</FormLabel>
              <Select defaultValue="">
                <option value="">選択してください</option>
                <option value="sunny">晴</option>
                <option value="cloudy">曇</option>
                <option value="rainy">雨</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} w={{ md: '25%' }}>
            <FormControl>
              <FormLabel htmlFor="email">室温</FormLabel>
              <NumberInput defaultValue={0} precision={1} step={0.1} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>
        </Box>
        <Flex mt={4}>
          <FormControl>
            <FormLabel htmlFor="email">備考</FormLabel>
            <Textarea placeholder="備考" />
          </FormControl>
        </Flex>
        <Flex mt={4} justifyContent="center">
          <Button colorScheme="blue">Submit</Button>
        </Flex>
      </Panel>
    </Box>
  );
};

export default RecordEdit;
