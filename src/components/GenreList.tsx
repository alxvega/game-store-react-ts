import { useGenres } from "../hooks/useData";
import { List, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItem from "./GenreListItem";
import { Genre } from "../hooks/useData-types";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
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

  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {genresError && <Text>{genresError}</Text>}
      <List>
        {isLoadingGenres &&
          skeletons.map((skeleton) => (
            <GenreListSkeleton
              paddingY={styleProps.paddingY}
              key={`skeleton-${skeleton}`}></GenreListSkeleton>
          ))}

        {genres.map((genre) => (
          <GenreListItem
            onSelectedGenre={onSelectedGenre}
            key={genre.id}
            genre={genre}
            boxSize={styleProps.boxSize}
            paddingY={styleProps.paddingY}
            borderRadius={styleProps.borderRadius}></GenreListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
