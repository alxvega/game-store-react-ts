import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { OrderBy } from "../hooks/useData-types";

interface SortCriteria {
  value: { value: string; label: string } | null;
  label: string;
}

interface Props {
  sortCriterias: SortCriteria[];
  onSelectedSortOrder: (orderBy: OrderBy) => void;
}

const SortSelector = ({ sortCriterias, onSelectedSortOrder }: Props) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {sortCriterias.map((criteria) => (
          <MenuItem
            key={criteria.value?.value}
            onClick={() => onSelectedSortOrder({ criteria: criteria.value })}>
            {criteria.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
