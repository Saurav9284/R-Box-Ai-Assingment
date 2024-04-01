import { Box, Flex, Stack, Select, Text, Input, InputGroup, InputLeftElement, Button, useColorMode } from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";


export const getDate = (data)=>{
    let date = new Date(data);
    let temp = date.toDateString().split(' ');
    return `${temp[1]} ${temp[2]}`;
}

export const Inbox = ({emails}) =>{
    const { colorMode} = useColorMode();
    const navigate = useNavigate();
    const handleClick = (threadId) =>{
        navigate(`/onebox/${threadId}`)
    }

    return (
        <Box
        w="20%"
        borderRight="1px"
        borderColor={(colorMode=='light')? "#D8D8D8":"#343A40"}
        minHeight="100vh" 
        bgColor={colorMode=="light" ? "white" :"black"}
        textAlign="center"
        padding="12px"
        >
            <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            padding="7px"
            textAlign="left"
            
            >
                <Stack 
                padding="2px 7px"
                fontFamily="Open Sans"
                fontWeight="700"
                >
                    <Select 
                    border="none"
                    variant="unstyled"
                    color="#4285F4" 
                    fontSize="20px"
                    >
                        <option value="all_inbox">✉️ All Inbox(s)</option>
                    </Select>
                    <Text 
                    color="#7F7F7F"
                    fontFamily="Open Sans"
                    fontWeight="400"
                    fontSize="14px"
                    >
                        <span
                        style={{color:(colorMode=="light")?"#343A40":"white", 
                        fontWeight:"700"}} 
                        
                        >30/30</span> Inboxes selected
                    </Text>
                </Stack>

                <Box
                w="32px"
                h="32px"
                borderRadius="4px"
                padding="8px"
                border="1px" 
                bgColor={colorMode=="light" ? "white":"#25262B"}
                borderColor={(colorMode=='light') ? "#DFE3E8" : "#25262B"}
        
                >
                    <MdRefresh />
                </Box>
            </Flex>
            <Stack>
                <Box padding="4px 6px">
                    <InputGroup
                    borderRadius="4px"
                    >
                        <InputLeftElement pointerEvents='none'>
                        <CiSearch  color='gray' /> 
                        </InputLeftElement>
                        <Input 
                        backgroundColor={colorMode=="light" ? "white":"#23272C"} 
                        type='text' 
                        placeholder='Search' />
                    </InputGroup>
                </Box>
                
                <Flex
                padding="3px 8px"
                justifyContent="space-between"
                alignItems="center"
                fontFamily="Inter"
                fontWeight="600"
                >
                    <Flex 
                    w="50%"
                    alignItems="center"
                    gap="10px"
                    
                    >
                        <Text
                        padding="3px 8px"
                        bgColor={colorMode=="light" ? "white":"#222426"}
                        borderRadius="17px" 
                        color="#5C7CFA"
                        >27</Text>
                        <Text
                        fontSize="14px"
                        color={colorMode=="light" ? "#172B4D":"#E6E6E6"}
                        >New Replies</Text>
                    </Flex>
                    
                    <Select 
                    w="40%"
                    fontFamily="Inter"
                    fontWeight="600"
                    fontSize="14px"
                    color={colorMode=="light" ? "#172B4D":"#E6E6E6"}
                    variant="unstyled"
                    >
                        <option value="newest">Newest</option>
                    </Select>
                </Flex>
                <Box 
                borderTop="1px"
                borderColor={(colorMode=='light')? "#D8D8D8":"#343A40"}>
                    {
                        emails && emails.map((item, i) => (
                            <Box
                           
                            borderBottom="1px"
                           
                            borderColor={(colorMode=='light')? "#D8D8D8":"#343A40"}
                            key={i}
                            display="flex"
                            flexDirection="column"
                            gap="8px"
                            padding="12px 8px"
                            cursor='pointer'
                            onClick={()=>handleClick(item.threadId)}
                            >   
                                <Stack
                                textAlign="left"
                                spacing="2px"
                                >
                                    <Flex
                                    justifyContent="space-between"
                                    fontFamily="Inter"
                                    >
                                        <Text 
                                        color={colorMode=="light" ? "#343A40":"white"}
                                        fontSize="14px"
                                        fontWeight="500">{item.fromEmail}</Text>
                                        <Text
                                        fontFamily="Inter"
                                        fontWeight="400"
                                        fontSize="12px"
                                        color={colorMode=='light' ? "#919EAB" : "gray"}
                                        >{getDate(item.sentAt)}</Text>
                                    </Flex>
                                    <Text
                                    w="60%"
                                    fontWeight="400"
                                    fontSize="12px"
                                    color={colorMode=="light" ? "#172B4D":"#E1E0E0"} 
                                    noOfLines={1}>{item.subject}</Text>  
                                </Stack>
                                
                                <Flex
                                gap="8px">
                                    <Button 
                                    height="20px"
                                    padding="3px 8px"
                                    borderRadius="17px"
                                    fontFamily="Open Sans"
                                    fontWeight="600"
                                    color="#57E0A6"
                                    bgColor={colorMode=='light' ? "#F0F0F0" : "#222426"}
                                    fontSize="10px"
                                    >
                                        Interested
                                    </Button>
                                    <Button
                                    height="20px"
                                    padding="3px 8px"
                                    borderRadius="17px"
                                    fontSize="10px"
                                    fontFamily="Open Sans"
                                    fontWeight="600"
                                    color={colorMode=='light' ?"#637381":"#FFFFFF"}
                                    bgColor={colorMode=='light' ? "#F0F0F0" : "#222426"}
                                    
                                    >
                                        Campaign Name
                                    </Button>
                                </Flex>
                            </Box>
                        ))
                    }
                </Box>
            </Stack>
        </Box>
    )
}