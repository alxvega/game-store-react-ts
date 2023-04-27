import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import ScoreBadge from "./ScoreBadge";
interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card
      borderRadius={10}
      overflow='hidden'>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (p) => p.platform
            )}></PlatformIconList>
          <ScoreBadge score={game.metacritic}></ScoreBadge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
