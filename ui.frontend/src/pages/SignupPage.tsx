import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import Input from '../components/common/Inputs';
import { Flex, Box, Checkbox, Highlight, Stack, Heading, Text } from '@chakra-ui/react';

import { useNavigate } from '../hooks/useNavigate';

const SignupPage: React.FC = () => {
  const { goToPage } = useNavigate();

  return (
    <MainLayout>
      <Flex justifyContent="center" alignItems="center">
        <Stack spacing={8} pt={5} width={{ base: '100%', md: '500px' }}>
          <Stack align={'center'}>
            <Heading color={'gray.600'} fontWeight={'bold'} fontSize={'5xl'}>Create Account</Heading>
            <Text fontSize={'lg'} color={'gray.500'}>Let's get you setup with a new account!</Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={{ md:'lg' }} p={{ md: 8 }}>
            <Stack spacing={4}>
              {/* Forms */}
              <Input label="Full Name" type="text" />
              <Input label="Email address" type="email" />
              <Input label="Password" type="password" />
              
              {/* Bottom */}
              <Stack spacing={10}>
                <Checkbox colorScheme='red' color={'gray.600'}>I agree to use this app with my own risk.</Checkbox>

                {/* Submit */}
                <Button title="Create account" variant="primary" />

                {/* Reminder */}
                <Text textAlign={'center'} color={'gray.500'}>
                  Already have an account?{' '}
                  <Box as="span" cursor="pointer" color="red.400" fontWeight="medium" _hover={{ textDecoration: 'underline' }} onClick={() => goToPage('/signin')}>
                    <Highlight query="Sign in" styles={{ color: 'red.400', fontWeight: 'medium' }}>
                      Sign in
                    </Highlight>
                  </Box>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </MainLayout>
  );
};

export default SignupPage;