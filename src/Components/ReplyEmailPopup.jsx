import { Box, 
    Button, 
    Popover, 
    PopoverTrigger, 
    PopoverContent, 
    PopoverHeader, 
    PopoverCloseButton,
    Textarea,
    Input,
    Stack, 
    InputLeftAddon,
    InputGroup, 
    PopoverBody,
    Image,
    Flex,
    useToast,
    useColorMode } from "@chakra-ui/react";
import { MdReply, 
    MdArrowDropDown, 
    MdFlashOn,
    MdOutlineRemoveRedEye 
 } from "react-icons/md";
import spellCheckDark from "../SvgImages/SpellCheckDark.svg";
import spellCheckLight from "../SvgImages/SpellCheckLight.svg";
import linkDark from "../SvgImages/linkDark.svg";
import linkLight from "../SvgImages/linkLight.svg";
import imageDark from "../SvgImages/imageDark.svg";
import imageLight from "../SvgImages/imageLight.svg";
import sentiment_satisfiedDark from "../SvgImages/sentiment_satisfiedDark.svg";
import sentiment_satisfiedLight from "../SvgImages/sentiment_satisfiedLight.svg";
import person_removeDark from "../SvgImages/person_removeDark.svg";
import person_removeLight from "../SvgImages/person_removeLight.svg";
import unfold_moreDark from "../SvgImages/unfold_moreDark.svg";
import unfold_moreLight from "../SvgImages/unfold_moreLight.svg";
import { useState } from "react";
import axios from 'axios';


const svgList = [
    {lightSvg: spellCheckLight, darkSvg: spellCheckDark},
    {lightSvg: linkLight, darkSvg: linkDark},
    {lightSvg: imageLight, darkSvg: imageDark},
    {lightSvg: sentiment_satisfiedLight, darkSvg: sentiment_satisfiedDark},
    {lightSvg: person_removeLight, darkSvg: person_removeDark},
    {lightSvg: unfold_moreLight, darkSvg: unfold_moreDark},
];

const postData = async (threadId, data, token) =>{

    try{
        const res = await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
        })

        return res;

    }catch(err){
        console.log(err);
    }
    
}

const iniState = {
    "toName": "Saurav",
    "to": "",
    "from": "",
    "fromName": "Saurav",
    "subject": "",
    "body": "",
    "references": [
        "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
        "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
        "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
        "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
    ],
    "inReplyTo": "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
};

export const ReplyEmailPopup = ({threadId, token}) =>{
    const {colorMode} = useColorMode();
    const [data, setData] = useState(iniState);
    const toast = useToast();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        // console.log(name, value);
        setData({...data, [name]:value});
        // console.log(data);
    }

    const handleSubmit = ()=>{
        postData(threadId, data, token).then(res=>{
            console.log(res);
            setData(iniState);
            toast({
                position:'top',
                title: "Reply successful",
                status: 'success',
                isClosable: true
            });

        }).catch(err=>{
            toast({
                position:'top',
                title: err.message,
                status: 'error',
                isClosable: true
            });
            console.log(err);
        });
    }

    return (
        <Box>
            <Popover placement='top-start'>
                <PopoverTrigger>
                {/*  Reply button */}
                <Button 
                leftIcon={<MdReply />}
                bgGradient='linear(to-r, rgba(75, 99, 221, 1), rgba(5, 36, 191, 0.99))'
                _hover={{
                    bgColor:"rgba(5, 36, 191, 0.99)"
                }}
                position="fixed"
                marginLeft="7px"
                bottom="7px"
                color={colorMode=='light' ? 'white' : 'white'}
                >
                    Reply
                </Button>
                </PopoverTrigger>

                {/* Popover the reply button */}
                <PopoverContent 
                ml="15px"
                w="50vw" h="60vh"
                bgColor={colorMode=='light' ? "gray.100" : "#141517"}
                >
                    <PopoverHeader
                    fontFamily='Open Sans' 
                    fontWeight='700'
                    fontSize="12px"
                    bgColor={colorMode=='light' ? 'gray.200' : '#23272C'}
                    color={colorMode=='light' ? 'black' : '#BAB9BD'}
                    >Reply</PopoverHeader>
                    
                    <PopoverCloseButton />
                    <PopoverBody bgColor={colorMode=='light' ? "gray.100" : "#141517"} padding='0'>
                        <Stack 
                        bgColor={colorMode=='light' ? "gray.100" : "#141517"} 
                        >
                            <InputGroup
                            w="100%" 
                            p="0px 32px 8px 32px"
                            borderBottom='1px'
                            borderColor={colorMode=='light' ? 'gray.300' : '#34383D'}
                            variant='unstyled'
                            >
                                <InputLeftAddon
                                // textAlign='right'
                                bgColor={colorMode=='light' ? "gray.100" :'#141517'}
                                color={colorMode=='light'? "gray.500" : "#BAB9BD"}
                                >To:</InputLeftAddon>
                                <Input
                                ml="8px" 
                                name='to'
                                value={data.to}
                                onChange={handleChange}
                                color={colorMode=='light'? "black" : "#E7E7E7"}
                                placeholder="jeane@icloud.com" />
                            </InputGroup>
                            <InputGroup
                            w="100%" 
                            p="0px 32px 8px 32px"
                            borderBottom='1px'
                            borderColor={colorMode=='light' ? 'gray.300' : '#34383D'}
                            variant='unstyled'
                            >
                                <InputLeftAddon
                                // textAlign='right'
                                bgColor={colorMode=='light' ? "gray.100" :'#141517'}
                                color={colorMode=='light'? "gray.500" : "#BAB9BD"}
                                >From:</InputLeftAddon>
                                <Input
                                ml="8px" 
                                name='from'
                                value={data.from}
                                onChange={handleChange}
                                color={colorMode=='light'? "black" : "#E7E7E7"}
                                placeholder="peter@reachinbox.com" />
                            </InputGroup>

                            <InputGroup
                            w="100%" 
                            p="0px 32px 8px 32px"
                            borderBottom='1px'
                            borderColor={colorMode=='light' ? 'gray.300' : '#34383D'}
                            variant='unstyled'
                            >
                                <InputLeftAddon
                                // textAlign='right'
                                bgColor={colorMode=='light' ? "gray.100" :'#141517'}
                                color={colorMode=='light'? "gray.500" : "#BAB9BD"}
                                >Subject:</InputLeftAddon>
                                <Input
                                ml="8px" 
                                name='subject'
                                value={data.subject}
                                onChange={handleChange}
                                color={colorMode=='light'? "black" : "#E7E7E7"}
                                placeholder="Warmup Welcome" />
                            </InputGroup>

                            <InputGroup
                            w="100%" 
                            p="0px 32px 8px 32px"
                            // borderBottom='1px'
                            variant='unstyled'
                            >
                                <Textarea
                                ml="8px"
                                minH="30vh"
                                resize={'none'}
                                name='body'
                                value={data.body}
                                onChange={handleChange}
                                color={colorMode=='light'? "black" : "white"}
                                placeholder="Hi Jeanne," />
                            </InputGroup>
                        </Stack>

                        <Flex
                        w="98%"
                        borderTop='1px'
                        borderColor={colorMode=='light' ? 'gray.300' : '#34383D'}
                        position='fixed'
                        bottom='0'
                        padding='7px 12px'
                        color={colorMode=='light' ? "white" : "#ADADAD"}
                        >
                            <Button
                            padding="8px 20px"
                            borderRadius='4px'
                            fontFamily='Open Sans'
                            fontWeight='600'
                            fontSize='14px'
                            color={colorMode=='light' ? "white" : "#ADADAD"}
                            bgGradient='linear(to-r, rgba(75, 99, 221, 1), rgba(5, 36, 191, 0.99))'
                            _hover={{
                                bgGradient:'linear(to-r, rgba(75, 99, 221, 1), rgba(5, 36, 191, 0.99))'
                            }}
                            alignItems='center'
                            alignContent='center'
                            rightIcon={<MdArrowDropDown />}
                            onClick={handleSubmit}
                            >
                                Send
                            </Button>


                            <Button
                            colorScheme='none'
                            color={colorMode=='light' ? "blackAlpha.700" : "#ADADAD"}
                            leftIcon={<MdFlashOn />}
                            >
                                Variables
                            </Button>
                            <Button
                            colorScheme="none"
                            color={colorMode == 'light' ? "blackAlpha.700" : "#ADADAD"}
                            leftIcon={<MdOutlineRemoveRedEye/>}
                            >Preview Emails</Button>
                            <Flex
                            gap="16px"
                            alignItems='center'
                            >
                                {
                                    svgList.map((item, i) =>(
                                        <Image key={i}
                                        cursor='pointer' 
                                        src={colorMode=='light' ? item.lightSvg : item.darkSvg} 
                                        />
                                    ))
                                }
                            </Flex>
                            
                        </Flex>
                        
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    )
}