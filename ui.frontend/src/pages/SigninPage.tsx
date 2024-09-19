import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import Input from '../components/common/Inputs';
import { Flex, Box, Checkbox, Stack, Heading, Text, Highlight } from '@chakra-ui/react';

import { useNavigate } from '../hooks/useNavigate';

const SigninPage: React.FC = () => {
  const { goToPage } = useNavigate();

  return (
    <MainLayout>
      <Flex justifyContent="center" alignItems="center">
        <Stack spacing={8} pt={5} width={{ base: '100%', md: '500px' }}>
          <Stack align={'center'}>
            <Heading color={'gray.600'} fontWeight={'bold'} fontSize={'5xl'}>Welcome Back</Heading>
            <Text fontSize={'lg'} color={'gray.500'}>Please login to your account!</Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={{ md:'lg' }} p={{ md: 8 }}>
            <Stack spacing={4}>
              {/* Forms */}
              <Input label="Email address" type="email" />
              <Input label="Password" type="password" />

              {/* Bottom */}
              <Stack spacing={10}>
                {/* Remember & Forgot Password */}
                <Stack direction={'row'} align={'start'} justify={'space-between'}>
                  <Checkbox colorScheme='red'>Remember me</Checkbox>
                  <Text color={'red.400'}>Forgot password?</Text>
                </Stack>

                {/* Submit */}
                <Button title="Login" variant="primary" />

                {/* Reminder */}
                <Text textAlign={'center'} color={'gray.500'}>
                  Don't have an account?{' '}
                  <Box as="span" cursor="pointer" color="red.400" fontWeight="medium" _hover={{ textDecoration: 'underline' }} onClick={() => goToPage('/signup')}>
                    <Highlight query="Sign in" styles={{ color: 'red.400', fontWeight: 'medium' }}>
                      Sign up
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

export default SigninPage;