import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useGenres } from "../hooks/useData";
import { Genre } from "../hooks/useData-types";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresDropdown = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error } = useGenres();
  if (error) return <Text>{error}</Text>;

  const currentPlatform = data.find((genre) => genre === selectedGenre);

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}>
          {currentPlatform?.name || "Genres:"}
        </MenuButton>
        <MenuList>
          {data.map((genre) => (
            <MenuItem
              key={genre.id}
              onClick={() => onSelectedGenre(genre)}>
              {genre.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default GenresDropdown;
