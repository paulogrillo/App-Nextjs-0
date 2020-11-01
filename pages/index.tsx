// import Head from 'next/head'

import { Heading, Grid, Flex, ModalHeader, Image, } from '@chakra-ui/core';

import MenuNavBar from './_components/MenuNavBar';
import SliderHome from './_components/SliderHome';

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
     '. . main .'
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
      
      <Flex 
      gridArea="1fr 1200px 1fr "
      position="absolute"
      width="100vw"
      height="78vh"
      marginTop="150px"

      top="0"
      right="0"
     
      
      >
            <Image

            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
            opacity={0.8}
            />
      </Flex>
      <Flex
      gridArea="projects"
      >
      <ProjetosPrincipais />
      </Flex>
     </Grid>
    
  )
}
