import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
const Navbar = () => {
  return (
    <Box id="nav-menu" bg='blue' >
      <HStack color='white' spacing='100px' >
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Skills/>
      </HStack>
    </Box>
  );
};

export default Navbar;
