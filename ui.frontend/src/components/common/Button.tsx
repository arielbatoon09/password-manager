import { Button as ChakraBtn, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  title: string;
  variant: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<CustomButtonProps> = ({ title, variant, ...props }) => {
  return (
    <ChakraBtn fontSize="md" fontWeight={600} py={6} px={7}
      color={
        variant === "primary" ? "white" : variant === "secondary" ? "red.400" : "gray.600"
      }
      bg={variant === "primary" ? "red.400" : "transparent"}
      border={variant === "secondary" ? "2px solid" : "none"}
      borderColor={variant === "secondary" ? "red.400" : "transparent"}
      _hover={
        variant === "primary"
          ? { bg: "red.500" }
          : variant === "secondary"
          ? { bg: "red.50" }
          : { bg: "transparent" ,color: "red.400" }
      }
      {...props}
    >
      {title}
    </ChakraBtn>
  );
};

export default Button;