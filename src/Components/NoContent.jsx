import { Image, Stack, Heading, Text, useColorMode } from "@chakra-ui/react";
import no_message_img from "../Images/No_Message_illustration.png";

export const NoContent = () =>{
    const {colorMode} = useColorMode();

    return (
        <Stack
            w="100%"
            h="100vh"
            bg={(colorMode === 'dark') ? '#000000' : 'transparent'} 
        >
            <Stack
                w="60%"
                margin="auto"
                marginTop="142px"
                textAlign="center"
                alignItems="center"
                spacing="48px"
            >
                <Image
                    w="35%" 
                    src={no_message_img} 
                />
                <Stack 
                    spacing="24px"
                    w="60%"
                    textAlign="center"
                    fontFamily="DM Sans"
                >
                    <Heading 
                        fontSize="24px"
                        color={colorMode === 'light' ? "black" : "white"}
                        fontFamily="DM Sans"
                        fontWeight="700"
                    >
                        It's the beginning of a legendary sales pipeline
                    </Heading>
                    
                    <Text 
                        w="50%"
                        m="auto"
                        noOfLines={2}
                        fontSize="18px"
                        color="#9E9E9E"
                        fontFamily="DM Sans"
                        fontWeight="500"
                    >
                        When you have inbound E-mails you'll see them here
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}
