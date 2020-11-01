import React from 'react';
import { Box, Image, Text, Link, Grid} from '@chakra-ui/core';
function ProjetosPrincipais() {
    return(
<Grid 
    templateColumns="repeat(5, 3fr )" 
    gap={5}
    justifyContent="center"
    alignItems="center"


    
    >
    <Box display={{ md: "flex" }} marginTop="50px">
     {/* --- BOX 1 --- */}
        <Box flexShrink="0">
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
            <Text 
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wide"
                color="teal.600"
                
            >
                Marketing
            </Text>
            <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href="#"
            >
                Social Media
            </Link>
            <Text mt={2} color="gray.500">
                texto
            </Text>
        </Box>
        {/* --- BOX 2 --- */}
    
     <Box flexShrink="0">
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
        margin="20px"
        >
            <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wide"
                color="teal.600"
            >
                Marketing
            </Text>
            <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href="#"
            >
                Social Media
            </Link>
            <Text mt={2} color="gray.500">
                texto
            </Text>
        </Box>
        {/* --- BOX 4 --- */}
        <Box flexShrink="0">
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
        margin="20px"
        >
            <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wide"
                color="teal.600"
            >
                Marketing
            </Text>
            <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href="#"
            >
                Social Media
            </Link>
            <Text mt={2} color="gray.500">
                texto
            </Text>
        </Box>
        {/* --- BOX 5 --- */}
        <Box flexShrink="0">
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
        margin="20px"
        >
            <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wide"
                color="teal.600"
            >
                Marketing
            </Text>
            <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href="#"
            >
                Social Media
            </Link>
            <Text mt={2} color="gray.500">
                texto
            </Text>
        </Box>
    </Box>
        </Grid>
    );
}

export default ProjetosPrincipais;