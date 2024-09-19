import MainLayout from '../components/layout/MainLayout';

import { Container, Stack, Box, Heading, Text } from '@chakra-ui/react';

const ErrorPage = () => {

  return (
    <MainLayout>
      <Container maxW={'3xl'}>
        <Stack as={Box} textAlign={'center'} justifyContent="center" alignItems="center" h="70vh">
          <Heading color={'gray.600'} fontWeight={800} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>PAGE DOES NOT EXIST
            <br />
            <Text as={'span'} color={'red.400'}>404 ERROR</Text><span> ALERT!</span>
          </Heading>
        </Stack>
      </Container>
    </MainLayout>
  );
};

export default ErrorPage;