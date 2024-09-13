import { Container } from "@chakra-ui/react";
import Navbar from './Header/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container maxW='1280px'>
                {children}
            </Container>
        </>
    );
};

export default Layout;