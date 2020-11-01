// import Head from 'next/head'

import { Heading, Grid, Flex, ModalHeader, Image, Text, Box, Button } from '@chakra-ui/core';
import { GrContact } from 'react-icons/gr';

import MenuNavBar from './_components/MenuNavBar';
import ProjetosPrincipais from './_components/ProjetosPrincipais';

export default function Home() {
  return (
    
     <Grid
     as="main"
     height="100vh"
     templateColumns="1fr 1200px 1fr "
     templateRows="1fr 800px 1fr"
     templateAreas="
     '. . menu .'
     ' . main . .'
     '. projects . .'
     '. . . .'
     "
     justifyContent="center"
     alignItems="center"
     >       
      <Flex 
      gridArea="menu"
      marginTop="20px"
      >
        <MenuNavBar />
      </Flex>
      
    <Box
       position="absolute"
       top="310px"
       left="450px" 
        >

        <Heading as="h1" size="2xl"
        fontWeight="500"
        color="gray-700" 
        >
            Marketing, Performance & <br></br>Transformação Digital!
         </Heading>
        <Flex
         
         marginTop="20px"
        >
          <Button size="lg" color="#4733A1" mt="24px" fontSize="20px"
          backgroundColor="f1f1f1"
          >
            <GrContact />
            <Text
            marginLeft="20px"
            >
              Solicitar um orçamento!
            </Text>
          </Button>
        </Flex>
    </Box>

    <Box
       position="absolute"
  
       top="350px"
       left="800px"

       >
         
      <Image 
      src="https://i.ibb.co/tK5896H/ImgHome.png" 
      alt="Performance E Transformação Digital!" 
      w="600px"
      h="410px"
      
      />
      </Box>
      <Grid 
      position="absolute"
      bottom="0"
      right="0"
      left="0"

      marginBottom="25px"
      marginLeft="225px"
      >
        <ProjetosPrincipais />
      </Grid>
     </Grid>
    
  )
}
