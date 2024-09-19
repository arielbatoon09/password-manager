import React from 'react';
import { FormControl, FormLabel, Input as ChakraInput, FormErrorMessage } from '@chakra-ui/react';

interface InputProps {
  label: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  error = false,
  errorMessage,
  ...props
}) => {
  return (
    <FormControl isInvalid={error}>
      <FormLabel color={'gray.600'} fontWeight={'medium'} fontSize={'md'}>{label}</FormLabel>
      <ChakraInput py={4} type={type} _focusVisible={{ bg: 'red.50', borderColor: 'red.400' }} borderColor={error ? 'red.700' : undefined} {...props} />
      {error && errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
