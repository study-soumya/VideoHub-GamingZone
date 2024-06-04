import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p="16">
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading textAlign={"center"} color={"purple.500"}>
            Welcome Back
          </Heading>
          <Input
            placeholder="Email"
            required
            type={"email"}
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            required
            type={"password"}
            focusBorderColor="purple.500"
          />
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetPassword"}>Forgot Password?</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Login
          </Button>

          <Text textAlign={"right"}>
            New User?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
