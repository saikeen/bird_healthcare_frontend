import { FormControl, FormLabel } from '@chakra-ui/react';
import React from 'react';

const Form: React.FC<{
  title: string;
  component: React.ReactNode;
}> = ({ title, component }) => {
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      {component}
    </FormControl>
  );
};

export default Form;
