import { Stack, Flex, Text, Heading, Image, Box, useColorMode } from "@chakra-ui/react";
import { LuMailOpen } from "react-icons/lu";
import emailImg from "../Images/email.png";
import sendImg from "../Images/send.png";

const user = {
    "Name": "Box-AI",
    "Contact No": "+91-9284958047",
    "Email Id": "boxai@gmail.com",
    "LinkedIn": "linkedin.com",
    "Company Name": "Reachinbox"
}

const headingStyle = {
    borderRadius: "8px",
    padding: "8px 12px",
    color: "white",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "14px"
}
const styleProps = {
    justifyContent:"space-between"
}
const stackProps = {
    alignItems:"left"
}

const textStyleProps = {
    fontFamily:"Open Sans",
    fontWeight:"600",
    fontSize:"13px",
        
}
const boxStyleProps = {
    w:"32px",
    h:"32px",
    borderRadius:"50%",
    border:"1px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}
 
export const Details = () =>{
    const {colorMode, toggleColormode} = useColorMode();

    return (
        <Stack 
        w="20%"
        bgColor={colorMode=="light"?"white":"black"}
        borderLeft="1px"
        borderColor={(colorMode=='light')? "#D8D8D8":"#343A40"}
        textAlign="left"
        padding="16px 5px"
        >
            <Heading {...headingStyle}
            bgColor={colorMode=='light' ? "#ECEFF3" :"#23272C"}
            color={colorMode=='light' ? "#454F5B" : "#FFFFFF"}
            >
                Lead Details
            </Heading>

            <Stack 
            padding="8px 12px 16px 12px"
            >
                
                <Flex {...styleProps}>
                    <Text 
                    color={colorMode=='light' ? "#637381" : "white"}
                    >Name</Text>
                    <Text 
                    color={colorMode=='light'? "black" : "#B9B9B9"}
                    >{user.Name}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text
                    color={colorMode=='light' ? "#637381" : "white"}
                    >Contact No</Text>
                    <Text
                    color={colorMode=='light'? "black" : "#B9B9B9"}
                    >{user["Contact No"]}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text
                    color={colorMode=='light' ? "#637381" : "white"}
                    >Email ID</Text>
                    <Text
                    color={colorMode=='light'? "black" : "#B9B9B9"}
                    >{user["Email Id"]}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text                    
                    color={colorMode=='light' ? "#637381" : "white"}
                    >Linkedin</Text>
                    <Text
                    color={colorMode=='light'? "black" : "#B9B9B9"}
                    >{user.LinkedIn}</Text>
                </Flex>
                <Flex {...styleProps}>
                    <Text
                    color={colorMode=='light' ? "#637381" : "white"}
                    >Company Name</Text>
                    <Text
                    color={colorMode=='light'? "black" : "#B9B9B9"}
                    >{user["Company Name"]}</Text>
                </Flex>
            </Stack>


            <Heading {...headingStyle}
            bgColor={colorMode=='light' ? "#ECEFF3" :"#23272C"}
            color={colorMode=='light' ? "#454F5B" : "#FFFFFF"}

            >Activities</Heading>
            <Stack
            padding="8px 20px" 
            fontFamily="Open Sans"
            fontWeight="600"
            spacing="20px"
            >
                <Text
                fontSize="15px"
                color={colorMode=='light'? "#172B4D":"white"}
                >
                    Compaign Name
                </Text>
                <Flex
                fontSize="12px"
                gap="10px"
                >
                    <Text 
                    borderRight="1px"
                    borderColor={(colorMode=='light')? "#D8D8D8":"#343A40"}
                    paddingRight="10px"
                    ><span fontWeight="400">3</span> Steps</Text>
                    <Text><span fontWeight="400">8</span> Days in Sequence</Text>
                </Flex>

                <Stack 
                textAlign="left" 
                w="100%"
                spacing="32px"
                >
                    <Flex
                    gap="16px" 
                    >
                        <Box
                        {...boxStyleProps}
                        bgColor={(colorMode=='light')? "#EEF1F4" : "#23272C"}
                        borderColor={colorMode=='light' ? "#EEF1F4": "#41464B"}
                        >
                            <Image src={emailImg} />
                        </Box>
                        
                        <Stack
                        {...stackProps}
                        >
                            <Text
                            {...textStyleProps}
                            color={colorMode=='light'?"#172B4D":"white"}
                            >Step 1: Email</Text>
                            <Flex 
                            alignItems="center"
                            gap="2px"
                            >
                                <Image src={sendImg} />
                                
                                <Text
                                fontFamily="Inter"
                                fontWeight="400"
                                fontSize="10px"
                                color={colorMode=='light'?"gray.700":"#B9B9B9"}
                                >Sent <span>5th, March</span></Text>
                            </Flex>
                        </Stack>
                    </Flex>

                    <Flex
                    gap="16px" 
                    >
                        <Box {...boxStyleProps}
                        bgColor={(colorMode=='light')? "#EEF1F4" : "#23272C"}
                        borderColor={colorMode=='light' ? "#EEF1F4": "#41464B"}
                        >
                            <Image src={emailImg} />
                        </Box>

                        <Stack {...stackProps}
                        >
                            <Text {...textStyleProps}
                            color={colorMode=='light'?"#172B4D":"white"}

                            >Step 2: Email</Text>
                            <Flex 
                            alignItems="center"
                            gap="8px">
                                <LuMailOpen color="#ECBF21" />
                                <Text
                                 fontFamily="Inter"
                                 fontWeight="400"
                                 fontSize="10px"
                                color={colorMode=='light'? "gray.700": "#B9B9B9"}
                                >Opened <span>1st, March</span></Text>
                            </Flex>
                        </Stack>
                    </Flex>

                    <Flex
                    gap="16px" 
                    >
                        <Box {...boxStyleProps}
                        borderColor={colorMode=='light' ? "#EEF1F4": "#41464B"}
                        bgColor={(colorMode=='light')? "#EEF1F4" : "#23272C"}
                        >
                            <Image src={emailImg} />
                        </Box>
                            
                        <Stack {...stackProps}>
                            <Text  {...textStyleProps}
                            color={colorMode=='light'?"#172B4D":"white"}

                            >Step 3: Email</Text>
                            <Flex
                            alignItems="center"
                            gap="8px" 
                            >
                                <LuMailOpen color="#ECBF21" />
                                <Text
                                 fontFamily="Inter"
                                 fontWeight="400"
                                 fontSize="10px"
                                 color={colorMode=='light'? "gray.700": "#B9B9B9"}
                                >Opened <span>1st, March</span></Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Stack>

            </Stack>
            
        </Stack>
    )
}