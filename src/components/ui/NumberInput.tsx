import {
  NumberInput as ChakraUiNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React from 'react';

const NumberInput: React.FC<{
  defaultValue?: number;
  precision?: number;
  step?: number;
  min?: number;
}> = ({ defaultValue, precision, step, min }) => {
  return (
    <ChakraUiNumberInput
      defaultValue={defaultValue}
      precision={precision}
      step={step}
      min={min}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraUiNumberInput>
  );
};

export default NumberInput;
