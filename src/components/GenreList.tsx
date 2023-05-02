import { useGenres } from "../hooks/useData";
import { List, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItem from "./GenreListItem";

const GenreList = () => {
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
          skeletons.map((skeleton, index) => (
            <GenreListSkeleton
              boxSize={styleProps.boxSize}
              borderRadius={styleProps.borderRadius}
              key={`skeleton-${index}`}></GenreListSkeleton>
          ))}

        {genres.map((genre) => (
          <GenreListItem
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
