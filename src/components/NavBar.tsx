import { Box, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { SearchInputProps } from "./SearchInput";

const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <>
      <HStack
        justifyContent='space-between'
        padding='15px'>
        <Image
          src={logo}
          boxSize='60px'
        />
        <SearchInput onSearch={onSearch}></SearchInput>
        <Box>
          <ColorModeSwitch />
        </Box>
      </HStack>
    </>
  );
};

export default NavBar;
