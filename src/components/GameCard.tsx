import { Game } from "../hooks/useData-types";
import PlatformIconList from "./PlatformIconList";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import ScoreBadge from "./ScoreBadge";
import getCroppedImageUrl from "../services/image-url";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack
          justifyContent='space-between'
          marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (p) => p.platform
            )}></PlatformIconList>
          <ScoreBadge score={game.metacritic}></ScoreBadge>
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
