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
}> = ({ defaultValue, precision, step, min }) => (
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

NumberInput.defaultProps = {
  defaultValue: undefined,
  precision: undefined,
  step: undefined,
  min: undefined,
};

export default NumberInput;
