import { useState } from "react";
import { Flex, Grid, GridItem, Box, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre, Platform } from "./hooks/useData-types";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GenresDropdown from "./components/GenresDropdown";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  orderBy: string;
  searchText: string;
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }></NavBar>
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
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <Flex
              flexDirection={["column", "row"]}
              marginBottom={2}>
              <Box marginBottom={[2, 0]}>
                <Flex
                  flexDirection={["row", "row"]}
                  marginBottom={2}
                  wrap='wrap'>
                  <Box marginRight={[2, 5]}>
                    <PlatformSelector
                      selectedPlatform={gameQuery.platform}
                      onSelectPlatform={(platform) =>
                        setGameQuery({ ...gameQuery, platform })
                      }
                    />
                  </Box>
                  <Show below='lg'>
                    <Box alignContent='flex-start'>
                      <GenresDropdown
                        selectedGenre={gameQuery.genre}
                        onSelectedGenre={(genre) =>
                          setGameQuery({ ...gameQuery, genre })
                        }></GenresDropdown>
                    </Box>
                  </Show>
                </Flex>
              </Box>
              <SortSelector
                sortOrder={gameQuery.orderBy}
                onSelectedSortOrder={(orderBy) =>
                  setGameQuery({ ...gameQuery, orderBy })
                }></SortSelector>
            </Flex>
          </Box>
          <GamesGrid gameQuery={gameQuery}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
