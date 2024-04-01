import React from 'react';
import { Box, Image, Stack, Text, Button, Link, Center, useColorMode } from "@chakra-ui/react";
import logoImg from "../Images/logo.png";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Box  
    fontFamily={"Open Sans"}
    bgColor="black"
    >
       
      <Center 
        p="10px 100px"
        w={"100%"}
        h={"64px"}
        borderBottom={"1px"}
        
        borderColor="#25262B"
        pos={"fixed"}
        top={0}
        
        bgColor="black"
      >
          <Box>
            <Image src={logoImg} alt="ReachInBox logo" />
          </Box>
          
      </Center>
       

      <Center 
      minH="100vh"
     
      bgColor={'black'} 
      >
        <Stack 
        w={"25%"} 
        m={"auto"}
        p={"24px 40px 40px 40px"}
        spacing={"48px"}
        border="1px"
        borderRadius={"17px"}
       
        bgGradient={'linear(to-t, #111214, #121212)'}
        >
          <Stack spacing={"24px"}>
            <Text size={"20px"}
            color="white"
            >Create a new account</Text>
            
            <Button 
            border={"1px solid #707172"}
            display={"Flex"}
            gap={"10px"}
            p="8px 16px"
            borderRadius={"4px"}
            bgGradient={'linear(to-t, #111214, #121212)'}
            color='#CCCCCC'
            fontFamily='Open Sans'
            fontWeight='400'
            _hover={{
              bgGradient:'linear(to-t, #111214, #121212)'
            }}
            ><FcGoogle /> 
            <Link 
            href='https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-ai.netlify.app/onebox'
            >
              Sign Up with Google
            </Link>
            </Button>
          </Stack>

          <Stack
          spacing={"24px"}
          textAlign='center'
          alignItem="center"
          >
            <Button
            w="50%" 
            margin='auto'
            bgGradient="linear(to-r, #4B63DD, #0524BF)"
            borderRadius="4px"
            padding="13px 35px"
            color={colorMode=='light'? "white" : "white"}
            fontSize={"14px"}
            _hover={{
              backgroundColor:"#0524BF"
            } 
            }
            >Create an Account</Button>
              <Text 
              fontSize={"14px"}
              color={"#909296"}
              fontFamily={"Open Sans"}
              fontWeight={"400"}
              >
                Already have an account? <Link 
              
                color={"white"} 
                href='https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-ai.netlify.app/onebox'>Sign In</Link>
              </Text>
          </Stack>
        </Stack>
      </Center>
      
    </Box>
    
  )
}

