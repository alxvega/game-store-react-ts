import { ListItem, HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useData-types";

interface Props {
  genre: Genre;
  boxSize: string;
  borderRadius: number;
  paddingY: string;
}

const GenreListItem = ({ genre, boxSize, borderRadius, paddingY }: Props) => {
  return (
    <>
      <ListItem paddingY={paddingY}>
        <HStack>
          {genre.name}
          <Image
            boxSize={boxSize}
            borderRadius={borderRadius}
            src={getCroppedImageUrl(genre.image_background)}></Image>
        </HStack>
        <Text fontSize='lg'>{genre.name}</Text>
      </ListItem>
    </>
  );
};

export default GenreListItem;
