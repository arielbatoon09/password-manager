import { Flex, Container } from "@chakra-ui/react";
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Flex direction="column" minHeight="100vh">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <Container flex="1" maxW='1280px' py={4}>
                {children}
            </Container>

            {/* Footer */}
            <Footer />
        </Flex>
    );
};

export default Layout;