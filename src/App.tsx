import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav" "main"`,
        base: `"nav nav" "aside main"`,
      }}>
      <GridItem
        area='nav'
        bg='grey'>
        Nav
      </GridItem>

      <Show above='lg'>
        <GridItem
          area='aside'
          bg='blue'>
          Aside
        </GridItem>
      </Show>

      <GridItem
        area='main'
        bg='red'>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
