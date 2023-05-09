import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre, Platform } from "./hooks/useData-types";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre })
              }></GenreList>
          </GridItem>
        </Show>
        <GridItem area='main'>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GamesGrid gameQuery={gameQuery}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
