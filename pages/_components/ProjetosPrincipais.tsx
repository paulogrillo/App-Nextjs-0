import React from 'react';
import { Box, Image, Text, Link, Grid} from '@chakra-ui/core';
function ProjetosPrincipais() {
    return(
    <Grid 
    
    >
    <Box display={{ md: "flex" }} marginTop="50px">
     {/* --- BOX 1 --- */}
        <Box >
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="data:image/png;base64,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"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
        </Box>
             {/* --- BOX 1 --- */}
             <Box >
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1200px-VTEX_Logo.svg.png"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
        </Box>
             {/* --- BOX 1 --- */}
             <Box >
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
        </Box>
             {/* --- BOX 1 --- */}
             <Box >
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://www.rdstation.com/wp-content/uploads/2017/02/rd_station_cor.png"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
        </Box>
             {/* --- BOX 1 --- */}
             <Box >
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="data:image/png;base64,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"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
        </Box>
             {/* --- BOX 1 --- */}
             <Box >
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://user-images.githubusercontent.com/21834/35175472-11db4c98-fd74-11e7-9886-7e4e418c3f90.png"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
        </Box>
             {/* --- BOX 1 --- */}
             <Box >
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display={{ md: "grid" }}
        margin="20px"
        >
        </Box>
            
    </Box>
        </Grid>
    );
}

export default ProjetosPrincipais;