import AuthLayout from '../../components/layout/AuthLayout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Inputs';
import Logo from '../../assets/images/favicon.png';
import { Flex, Box, Checkbox, Stack, Heading, Text, Image, Divider } from '@chakra-ui/react';

import { useNavigate } from '../../hooks/useNavigate';
import { useState } from 'react';

const SigninPage = () => {
  const [test, setTest] = useState('');
  const { goToPage } = useNavigate();

  const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setTest(event.target.value);
  };

  const handleSubmit = () => {
    alert(test);
  }

  return (
    <AuthLayout>
      <Flex height={{ base: 'calc(100vh - 48px)', xl: 'calc(100vh - 48px)' }} justifyContent="center" alignItems="center">
        <Stack spacing={8} pt={5} width={{ base: '100%', md: '500px' }}>
          <Stack align={'center'} >
            <Image onClick={() => goToPage('/')} cursor={'pointer'} src={Logo} boxSize={12} objectFit='cover' />
            <Heading color={'gray.600'} fontWeight={'bold'} fontSize={'3xl'}>Welcome Back</Heading>
            <Text fontSize={'md'} color={'gray.500'}>Please login to your account!</Text>
          </Stack>
          <Box bg={'white'}>
            <Stack spacing={4}>
              {/* Forms */}
              <Input value={test} onChange={handleInputChange} label="Email address" type="email" />
              <Input label="Password" type="password" />

              {/* Bottom */}
              <Stack spacing={4}>
                {/* Remember & Forgot Password */}
                <Stack direction={'row'} align={'start'} justify={'space-between'}>
                  <Checkbox colorScheme='red' color={'gray.500'}>Remember me</Checkbox>
                  <Text cursor={'pointer'} _hover={{ textDecoration: 'underline' }} color={'red.400'} onClick={() => goToPage('/forgot-password')}>Forgot password?</Text>
                </Stack>

                {/* Submit */}
                <Button title="Login" variant="primary" onClick={() => handleSubmit()} />
              </Stack>

              <Stack spacing={2}>
                <Flex pb={4} direction="row" alignItems="center" gap={4} flex="1" overflow="hidden">
                  <Divider as={'span'} borderWidth={1} borderColor={'gray.200'} rounded={2} flex="1" />
                  <Text color={'gray.400'} flex="0 1 auto" whiteSpace="nowrap" textAlign="center" overflow="hidden" textOverflow="ellipsis">
                    New to our platform?
                  </Text>
                  <Divider as={'span'} borderWidth={1} borderColor={'gray.200'} rounded={2} flex="1" />
                </Flex>

                {/* Move to Sign up */}
                <Button rounded={999} bg={'white'} py={2} color={'gray.500'} border={'1px solid'} borderColor={'gray.400'} title="Create an account" 
                  variant="primary" _hover={{bg: 'gray.100'}} fontWeight={'normal'}
                  onClick={() => goToPage('/signup')}
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </AuthLayout>
  );
};

export default SigninPage;