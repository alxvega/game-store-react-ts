import { useState } from "react";
import { Flex, Grid, GridItem, Box, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre, Platform } from "./hooks/useData-types";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  orderBy: string;
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
          <Flex
            paddingLeft={2}
            marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>

            <SortSelector
              sortOrder={gameQuery.orderBy}
              onSelectedSortOrder={(orderBy) =>
                setGameQuery({ ...gameQuery, orderBy })
              }></SortSelector>
          </Flex>

          <GamesGrid gameQuery={gameQuery}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
