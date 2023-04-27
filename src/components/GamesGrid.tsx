import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
