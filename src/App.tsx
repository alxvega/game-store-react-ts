import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre, OrderBy, Platform } from "./hooks/useData-types";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  orderBy: OrderBy | null;
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
          <HStack
            spacing={2}
            paddingLeft={2}
            marginBottom={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortCriterias={[
                {
                  value: { value: "", label: "Relevance" },
                  label: "Relevance",
                },
                {
                  value: { value: "-added", label: "Date added" },
                  label: "Date added",
                },
                { value: { value: "name", label: "Name" }, label: "Name" },
                {
                  value: { value: "-released", label: "Release date" },
                  label: "Release date",
                },
                {
                  value: { value: "metacritic", label: "Popularity" },
                  label: "Popularity",
                },
                {
                  value: { value: "-rating", label: "Average rating" },
                  label: "Average rating",
                },
              ]}
              onSelectedSortOrder={(orderBy) => {
                setGameQuery({ ...gameQuery, orderBy });
              }}
            />
          </HStack>
          <GamesGrid gameQuery={gameQuery}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
