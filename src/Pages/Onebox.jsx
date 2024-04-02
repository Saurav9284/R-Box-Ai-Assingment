import React, {useState, useEffect} from 'react';
import { Box, Flex, Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { Sidebar } from '../Components/Sidebar';
import { OneboxNavbar } from '../Components/OneboxNavbar';
import { Content } from '../Components/Content';
import { useLocation } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import axios from "axios";



const resetList = async(token) =>{
    try{
      const res = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/reset`,{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        },
      })
      return res;
    }catch(err){
      console.log("Error fetching data:" , err);
    }
}


const fetchData = async (token) => {
  try {
    const res = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
    }
    );
    return res;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



export const Onebox = ()=> {
  const [data, setData] = useState([]);
  const [contentName, setContentName] = useState('Home');
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token') || 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2F1cmF2MTc4Y2hhdmFuQGdtYWlsLmNvbSIsImlkIjo1MiwiZmlyc3ROYW1lIjoiU2F1cmF2IiwibGFzdE5hbWUiOiJDaGF2YW4ifSwiaWF0IjoxNzExOTYyODkwLCJleHAiOjE3NDM0OTg4OTB9.JCm7FChAlXVhc6Fu4DGMUJi91mZHIgC8iUCcDK24pSQ";
  localStorage.setItem('token', token);

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(()=>{

    if(token){
      fetchData(token).then(res=>{
        setData(res.data.data);
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
    }

  },[token]);
  // console.log(data)

  return (
    <Box>
      <Flex>
        <Sidebar contentName={contentName} setContentName={setContentName} />
        <Box w="96%">
            <OneboxNavbar />
            <Content contentName={contentName}  data={data} />
            <IconButton
            icon={<AiOutlineMessage />}
            aria-label="Chat"
            position="fixed"
            bottom="4"
            right="4"
            bg={colorMode === "light" ? "blue.500" : "blue.500"} 
            color={colorMode === "light" ? "black" : "white"} 
            _hover={{ bg: colorMode === "light" ? "blue.700" : "blue.700" }} 
            boxSize="60px"
          />
        </Box>
      </Flex>
    </Box>
  )
}

