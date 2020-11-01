import React from 'react';
import Link from 'next/link'

import { Menu, Button, MenuGroup, MenuButton, MenuList, MenuItem, MenuDivider, Grid, Flex, Image } from '@chakra-ui/core';

function MenuNavBar(): JSX.Element{
    return(
      <Grid
      as="menu"
      >
        <Menu>
          <MenuButton 
          as={Button} 
          >
            Menu
          </MenuButton>
          <MenuList
          
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