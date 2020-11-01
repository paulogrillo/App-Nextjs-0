import React from 'react';
import Link from 'next/link'

import { BiMenuAltRight, BiNoEntry } from 'react-icons/bi';

import { Menu, Button, MenuGroup, MenuButton, MenuList, MenuItem, MenuDivider, Grid, Flex, Image, Box } from '@chakra-ui/core';

function MenuNavBar(): JSX.Element{
    return(
      <Grid
      as="menu"
      
      >
        <Box 
         w="220px"
         h="220px"
        position="absolute"
        top="50px"
        right="0"
        left="250px"
       
        >
           <Flex >
              <div className="div">
                <img src="https://portfolio-olive-psi.vercel.app/static/media/logo.02202748.svg" alt="" width="150px"
                height="150px"/>
              </div>
           </Flex>
          </Box>
        <Menu>

          <MenuButton
            marginTop="65px"
          > 
            <BiMenuAltRight 
           size="45px"
           color="rgba(255, 255, 255[])" 
           />
          </MenuButton>
          <MenuList
          marginRight="300px"
          marginY={200}
          >
            <MenuGroup title="MARKETING DIGITAL" color="#8257e5"
            fontSize={25}
            
            >
              
              <Link href="/campanhas-google-ads">
                <MenuItem>Facebook ADS</MenuItem>
              </Link>

              <Link href="/campanhas-facebook-ads">
                <MenuItem>Google ADS</MenuItem>
              </Link>

              <Link href="/social-media">
                <MenuItem>Social Media</MenuItem>
              </Link>

              <Link href="/mobile-marketing">
                <MenuItem>Mobile Marketing</MenuItem>
              </Link>
              <Link href="/marketing-digital-seo">
                <MenuItem>SEO</MenuItem>
              </Link>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="WEB DEVELOPMENT"
            color="#8257e5"
            fontSize={25}
            >
              <Link href="/teste">
                <MenuItem>Site Estático</MenuItem>
              </Link>
              <Link href="/teste">
                <MenuItem>E-commerce</MenuItem>
              </Link>
              <Link href="/teste">
                <MenuItem>Blog</MenuItem>
              </Link>

            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="MOBILE"
            color="#8257e5"
            fontSize={25}
            >
              <Link href="/desenvolvimento-mobile-android">
                <MenuItem>Android</MenuItem>
              </Link>
              <Link href="/desenvolvimento-mobile-ios">
                <MenuItem>IOS</MenuItem>
              </Link>

            </MenuGroup>
          </MenuList>   
        </Menu> 
        <Flex
        position="absolute"
        top="0"
        right="0"
        bottom="0"

        >
          <Image 
            src="https://portfolio-olive-psi.vercel.app/static/media/logo.02202748.svg"
          />
        </Flex>
      </Grid>


    );
}

export default MenuNavBar;