import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"40"}
      p={"16"}
    >
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"}>
          <Heading
            size={"md"}
            textTransform={"uppercase"}
            textAlign={["center", "left"]}
          >
            Subscribe to get updates !
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter Your Email Here..."
              type={"email"}
              border={"none"}
              borderRadius="none"
              variant={"unstyled"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              colorScheme={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textTransform={"uppercase"} textAlign={"center"}>
            Video Hub
          </Heading>
          <Text textAlign={"center"} color={"purple.500"}>
            &#169; VIDEO HUB, 2024. All Rights Reserved.
          </Text>
        </VStack>
        <VStack w={"full"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Social Media
          </Heading>
          <Button variant={"link"} colorScheme={"purple"}>
            <a href="https://youtube.com">Youtube</a>
          </Button>
          <Button variant={"link"} colorScheme={"purple"}>
            <a href="https://instagram.com">Instagram</a>
          </Button>
          <Button variant={"link"} colorScheme={"purple"}>
            <a href="https://github.com">Github</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
