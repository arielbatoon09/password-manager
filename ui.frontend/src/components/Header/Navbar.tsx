import Button from '../Button';
import Logo from '../../assets/images/favicon.png';
import { useNavigate } from '../../hooks/useNavigate';

import { Box, Flex, Container, VStack, Stack, Image } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const { goToPage } = useNavigate();

  return (
    <VStack bg={'white'} borderBottom={1} borderStyle={'solid'} borderColor={'gray.200'} py={5}>
      <Container maxW='1280px' maxH={600}>
        <Flex justifyContent={'space-between'} direction={'row'}>
          <Box cursor={'pointer'} onClick={() => goToPage('/')}>
            <Image src={Logo} boxSize='42' objectFit='cover' />
          </Box>

          {/* Right Container */}
          <Stack direction={'row'} alignItems={'center'} spacing={6}>
            <Button title="Login" variant="tertiary" onClick={() => goToPage('/login')} />
            <Button title="Create Account" variant="primary" onClick={() => goToPage('/signup')} />
          </Stack>
        </Flex>
      </Container>
    </VStack>
  )
};

export default Navbar;