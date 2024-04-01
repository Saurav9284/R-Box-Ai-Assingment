import {Box,Image, Text, Flex, useColorMode, Stack, List, ListItem, Icon } from "@chakra-ui/react";
import { MdHome, MdPersonSearch, MdMail, MdViewList, MdBarChart } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import logo1 from "../Images/Logo_1.png";
import logoBlack from "../Images/Logo_black.png";



const listItems = [
    {name: "Home", icon:MdHome},
    {name: "PersonSearch", icon:MdPersonSearch},
    {name: "Mail", icon:MdMail},
    {name: "Send", icon:IoIosSend},
    {name: "ViewList", icon:MdViewList},
    {name: "Inbox", icon:FaInbox},
    {name: "BarChart", icon:MdBarChart},
    
]

export const Sidebar = ({contentName, setContentName}) =>{
  const {colorMode, toggleColorMode} = useColorMode();
  
  const handleContentName = (name) =>{
    setContentName(name);
  }

    return (
        <Flex 
        width="4%"
        minHeight="100vh" 
        direction="column"
        borderRight="1px"
        borderColor={(colorMode=='light')? "#D8D8D8":"#343A40"}
        padding="0px 4px"
        
        >
          <Box 
          w="48px"
          h="90px"
          borderRadius="2px"
          >
            <Box
            w="48px"
            h="70px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
              <Image 
              w="26px"
              h="24px"
              borderRadius="2px"
               src={ (colorMode=='light')? logoBlack : logo1} 
               />
            </Box>
          </Box>

          <Box
          w="48px"
          h="85vh"
          >
            <Flex
            w="48px"
            h="85vh"
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="32px"
            boxSize="borderBox"
            padding="16px 8px"
            >   
              {
                listItems.map((item, i) => (
                  <Box key={i}>
                      <Icon 
                      w="28px"
                      h="28px" 
                      as={item.icon}
                      onClick={()=>handleContentName(item.name)}
                      color={(colorMode=='light') ? '#919EAB' : '#AEAEAE'}
                      cursor='pointer'
                      />
                  </Box>    
                  
                     
                ))
              }
                
            </Flex>
          </Box>

          <Box
          w="48px"
          padding="12px 8px"
          >
            <Box 
            width="32px"
            height="32px"
            borderRadius="50%"
            bgColor="#054F31"
            display="flex"
            justifyContent="center"
            alignItems="center"
            pos='fixed'
            bottom="7px"
            >
              <Text 
              color={colorMode=='light'? "white": "white"}
              >SC</Text>
            </Box>
            
          </Box>
          
        </Flex>
    )
}