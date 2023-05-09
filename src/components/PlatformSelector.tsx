import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/useData";

const PlatformSelector = () => {
  const { data } = usePlatforms();

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}>
          Platforms
          <MenuList>
            {data.map((platform) => (
              <MenuItem key={platform.id}> {platform.name}</MenuItem>
            ))}
          </MenuList>
        </MenuButton>
      </Menu>
    </>
  );
};

export default PlatformSelector;