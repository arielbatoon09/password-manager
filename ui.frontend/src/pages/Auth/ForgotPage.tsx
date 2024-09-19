import AuthLayout from '../../components/layout/AuthLayout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Inputs';
import Logo from '../../assets/images/favicon.png';
import { Flex, Box, Stack, Heading, Text, Image, Divider } from '@chakra-ui/react';

import { useNavigate } from '../../hooks/useNavigate';

const ForgotPage = () => {
  const { goToPage } = useNavigate();

  return (
    <AuthLayout>
      <Flex height={{ base: 'calc(100vh - 48px)', xl: 'calc(100vh - 48px)' }} justifyContent="center" alignItems="center">
        <Stack spacing={8} pt={5} width={{ base: '100%', md: '500px' }}>
          <Stack align={'center'}>
            <Image onClick={() => goToPage('/')} cursor={'pointer'} src={Logo} boxSize={12} objectFit='cover' />
            <Heading color={'gray.600'} fontWeight={'bold'} fontSize={'3xl'}>Forgot your password?</Heading>
            <Text fontSize={'md'} color={'gray.500'}>You'll get an email with a reset link</Text>
          </Stack>
          <Box bg={'white'}>
            <Stack spacing={4}>
              {/* Forms */}
              <Input label="Email address" type="email" placeholder="your-email@example.com" py={6} />

              {/* Submit */}
              <Button title="Request Reset" variant="primary" />

              <Stack spacing={2}>
                <Flex pb={4} direction="row" alignItems="center" gap={4} flex="1" overflow="hidden">
                  <Divider as={'span'} borderWidth={1} borderColor={'gray.200'} rounded={2} flex="1" />
                  <Text color={'gray.400'} flex="0 1 auto" whiteSpace="nowrap" textAlign="center" overflow="hidden" textOverflow="ellipsis">
                    No need to reset?
                  </Text>
                  <Divider as={'span'} borderWidth={1} borderColor={'gray.200'} rounded={2} flex="1" />
                </Flex>

                {/* Move to Sign up */}
                <Button rounded={999} bg={'white'} py={2} color={'gray.500'} border={'1px solid'} borderColor={'gray.400'} title="Sign in to existing account"
                  variant="primary" _hover={{ bg: 'gray.100' }} fontWeight={'normal'}
                  onClick={() => goToPage('/signin')}
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </AuthLayout>
  );
};

export default ForgotPage;