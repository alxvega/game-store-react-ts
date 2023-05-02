import { ListItem, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  paddingY: string;
}

const GenreListSkeleton = ({ paddingY }: Props) => {
  return (
    <>
      <Skeleton paddingY={paddingY}>
        <SkeletonText
          fontSize='lg'
          width='168px'></SkeletonText>
      </Skeleton>
    </>
  );
};

export default GenreListSkeleton;
