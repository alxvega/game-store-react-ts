import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        whiteSpace='nowrap'
        colorScheme='green'
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}>
        Dark mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
