import Button from '../common/Button';
import Logo from '../../assets/images/favicon.png';
import { useNavigate } from '../../hooks/useNavigate';

import { Box, Flex, Container, VStack, Stack, Image, Heading } from "@chakra-ui/react";

export default function Navbar() {
  const { goToPage } = useNavigate();

  return (
    <VStack bg={'white'} borderBottom={1} borderStyle={'solid'} borderColor={'gray.200'} py={4}>
      <Container maxW='1280px'>
        <Flex justifyContent={'space-between'} direction={'row'}>
          <Box as={Flex} alignItems={'center'} gap={3} cursor={'pointer'} onClick={() => goToPage('/')}>
            <Image src={Logo} boxSize='42' objectFit='cover' />
            <Heading fontSize={'2xl'} fontWeight={'bold'} color={'red.400'}>VaultPass</Heading>
          </Box>

          {/* Right Container */}
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Button title="Sign in" px={4} variant="tertiary" onClick={() => goToPage('/signin')} />
            <Button title="Create Account" px={4} variant="primary" rounded={999} onClick={() => goToPage('/signup')} />
          </Stack>
        </Flex>
      </Container>
    </VStack>
  )
};