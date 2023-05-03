import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useData-types";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}>
        <GridItem area='nav'>
          <NavBar></NavBar>
        </GridItem>
        <Show above='lg'>
          <GridItem
            area='aside'
            paddingX={5}>
            <GenreList
              onSelectedGenre={(genre) => setSelectedGenre(genre)}></GenreList>
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GamesGrid selectedGenre={selectedGenre}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
