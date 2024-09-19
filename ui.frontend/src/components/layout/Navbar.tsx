import Button from '../common/Button';
import Logo from '../../assets/images/favicon.png';
import { useNavigate } from '../../hooks/useNavigate';

import { Box, Flex, Container, VStack, Stack, Image } from "@chakra-ui/react";

export default function Navbar() {
  const { goToPage } = useNavigate();

  return (
    <VStack bg={'white'} borderBottom={1} borderStyle={'solid'} borderColor={'gray.200'} py={5}>
      <Container maxW='1280px'>
        <Flex justifyContent={'space-between'} direction={'row'}>
          <Box cursor={'pointer'} onClick={() => goToPage('/')}>
            <Image src={Logo} boxSize='42' objectFit='cover' />
          </Box>

          {/* Right Container */}
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Button title="Sign in" variant="tertiary" onClick={() => goToPage('/signin')} />
            <Button title="Create Account" variant="primary" rounded={999} onClick={() => goToPage('/signup')} />
          </Stack>
        </Flex>
      </Container>
    </VStack>
  )
};