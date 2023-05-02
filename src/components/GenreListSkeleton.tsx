import { Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  borderRadius: number;
  boxSize: string;
}

const GenreListSkeleton = ({ boxSize, borderRadius }: Props) => {
  return (
    <>
      <Skeleton
        boxSize={boxSize}
        borderRadius={borderRadius}
      />
      <SkeletonText />
    </>
  );
};

export default GenreListSkeleton;
