import { Box, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack
        justifyContent='space-between'
        padding='15px'>
        <Image
          src={logo}
          boxSize='60px'
        />
        <Box>
          <ColorModeSwitch />
        </Box>
      </HStack>
    </>
  );
};

export default NavBar;
