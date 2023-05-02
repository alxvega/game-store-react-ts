import { Spinner, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  paddingY: string;
}

const GenreListSkeleton = ({ paddingY }: Props) => {
  return (
    <>
      <Skeleton paddingY={paddingY}>
        <Spinner></Spinner>
        <SkeletonText
          fontSize='lg'
          width='210px'></SkeletonText>
      </Skeleton>
    </>
  );
};

export default GenreListSkeleton;
