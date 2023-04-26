import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack
      justifyContent='space-between'
      padding='15px'>
      <Image
        src={logo}
        boxSize='60px'
      />
      <Text>
        <ColorModeSwitch></ColorModeSwitch>
      </Text>
    </HStack>
  );
};

export default NavBar;
