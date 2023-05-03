import { ListItem, HStack, Image, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useData-types";

interface Props {
  genre: Genre;
  boxSize: string;
  borderRadius: number;
  paddingY: string;
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreListItem = ({
  genre,
  boxSize,
  borderRadius,
  paddingY,
  onSelectedGenre,
  selectedGenre,
}: Props) => {
  return (
    <>
      <ListItem paddingY={paddingY}>
        <HStack>
          {genre.name}
          <Image
            boxSize={boxSize}
            borderRadius={borderRadius}
            src={getCroppedImageUrl(genre.image_background)}></Image>
          <Button
            fontSize='lg'
            variant='link'
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            onClick={() => onSelectedGenre(genre)}>
            {genre.name}
          </Button>
        </HStack>
      </ListItem>
    </>
  );
};

export default GenreListItem;
