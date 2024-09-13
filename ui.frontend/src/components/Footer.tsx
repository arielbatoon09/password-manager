import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg={'red.50'} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={'center'}>
        <Text color={'gray.600'} fontSize={'sm'}>© 2024 - Created by <b>Ariel Batoon</b>. All rights reserved</Text>
      </Container>
    </Box>
  )
}