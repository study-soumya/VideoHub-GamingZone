import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Videos = () => {
  const videosArr = [
    "http://media.w3.org/2010/05/sintel/trailer.mp4",
    "http://media.w3.org/2010/05/sintel/trailer.webm",
    "http://media.w3.org/2010/05/sintel/trailer.ogv",
    "http://media.w3.org/2010/05/sintel/trailer.h264",
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={["auto", "full"]}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: "100%" }}
        ></video>
        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
          <Heading>Sample Video 1</Heading>
          <Text>This is a sample video text for texting and demo...</Text>
        </VStack>
      </VStack>
      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"auto"}
      >
        {videosArr.map((item, index) => (
          <Button
            key={index}
            onClick={() => setVideoSrc(item)}
            variant={"ghost"}
            colorScheme={"purple"}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
