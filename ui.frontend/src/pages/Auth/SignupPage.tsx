import AuthLayout from '../../components/layout/AuthLayout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Inputs';
import Logo from '../../assets/images/favicon.png';
import { Flex, Box, Checkbox, Divider, Stack, Heading, Text, Image } from '@chakra-ui/react';

import { useNavigate } from '../../hooks/useNavigate';

const SignupPage = () => {
  const { goToPage } = useNavigate();

  return (
    <AuthLayout>
      <Flex height={{ base: '100vh', xl: 'calc(100vh - 48px)' }} mt={{ base: 4, md: 0 }} mb={{ base: 12, md: 0 }} justifyContent="center" alignItems="center">
        <Stack spacing={8} pt={5} width={{ base: '100%', md: '500px' }}>
          <Stack align={'center'}>
            <Image onClick={() => goToPage('/')} cursor={'pointer'} src={Logo} boxSize={12} objectFit='cover' />
            <Heading color={'gray.600'} fontWeight={'bold'} fontSize={'3xl'}>Create Account</Heading>
            <Text fontSize={'md'} color={'gray.500'}>Let's get you setup with a new account!</Text>
          </Stack>
          <Box bg={'white'}>
            <Stack spacing={4}>
              {/* Forms */}
              <Input label="Full Name" type="text" />
              <Input label="Email address" type="email" />
              <Input label="Password" type="password" />

              {/* Bottom */}
              <Stack spacing={4}>
                <Checkbox colorScheme='red' color={'gray.500'}>I agree to our Terms, Privacy Policy and Cookies Policy.</Checkbox>

                {/* Submit */}
                <Button title="Create account" variant="primary" />
              </Stack>
            </Stack>

            <Stack spacing={2} mt={4}>
              <Flex pb={4} direction="row" alignItems="center" gap={4} flex="1" overflow="hidden">
                <Divider as={'span'} borderWidth={1} borderColor={'gray.200'} rounded={2} flex="1" />
                <Text color={'gray.400'} flex="0 1 auto" whiteSpace="nowrap" textAlign="center" overflow="hidden" textOverflow="ellipsis">
                  Already have an account?
                </Text>
                <Divider as={'span'} borderWidth={1} borderColor={'gray.200'} rounded={2} flex="1" />
              </Flex>

              {/* Move to Sign up */}
              <Button rounded={999} bg={'white'} py={2} color={'gray.500'} border={'1px solid'} borderColor={'gray.400'} title="Sign in to existing account"
                variant="primary" _hover={{ bg: 'gray.100' }} fontWeight={'normal'}
                onClick={() => goToPage('/signin')}
              />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </AuthLayout>
  );
};

export default SignupPage;