import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

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
        {game.parent_platforms.map((platform) => (
          <Text>{platform.platform.name}</Text>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
