import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useData-types";
import PlatformSelector from "./components/PlatformSelector";
import { usePlatforms } from "./hooks/useData";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setSelectedGenre(genre)}></GenreList>
          </GridItem>
        </Show>
        <GridItem area='main'>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GamesGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
