import { useGenres } from "../hooks/useData";
import { Heading, List, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItem from "./GenreListItem";
import { Genre } from "../hooks/useData-types";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const {
    data: genres,
    error: genresError,
    isLoading: isLoadingGenres,
  } = useGenres();

  const styleProps = {
    boxSize: "32px",
    borderRadius: 8,
    paddingY: "5px",
  };

  if (genresError) return <Text>{genresError}</Text>;

  return (
    <List>
      <Heading
        fontSize='2xl'
        marginBottom={3}>
        Genres
      </Heading>
      {isLoadingGenres &&
        Array.from({ length: 20 }).map((_, index) => (
          <GenreListSkeleton
            paddingY={styleProps.paddingY}
            key={`skeleton-${index}`}></GenreListSkeleton>
        ))}

      {genres.map((genre) => (
        <GenreListItem
          selectedGenre={selectedGenre}
          onSelectedGenre={onSelectedGenre}
          key={genre.id}
          genre={genre}
          boxSize={styleProps.boxSize}
          paddingY={styleProps.paddingY}
          borderRadius={styleProps.borderRadius}></GenreListItem>
      ))}
    </List>
  );
};

export default GenreList;
