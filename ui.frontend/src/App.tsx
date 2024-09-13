import AppRouter from './Router.tsx';
import { ChakraProvider } from '@chakra-ui/react';

import './styles/App.css';

function App() {

  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  )
}

export default App