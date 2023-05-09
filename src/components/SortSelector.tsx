import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (sortBy: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectedSortOrder, sortOrder }: Props) => {
  const sortCriterias = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortCriterias.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortCriterias.map((criteria) => (
          <MenuItem
            key={criteria.value}
            onClick={() => onSelectedSortOrder(criteria.value)}>
            {criteria.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
