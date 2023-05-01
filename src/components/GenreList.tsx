import { useGenres } from "../hooks/useData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem
          key={genre.id}
          paddingY='5px'>
          <HStack>
            {genre.name}
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}></Image>
          </HStack>
          <Text fontSize='lg'>{genre.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
