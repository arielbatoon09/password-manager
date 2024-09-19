import { Flex, Container } from "@chakra-ui/react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Flex direction="column" minHeight="100vh">

            {/* Main Content */}
            <Container flex="1" maxW='1280px' py={4}>
                {children}
            </Container>
        </Flex>
    );
};

export default AuthLayout;