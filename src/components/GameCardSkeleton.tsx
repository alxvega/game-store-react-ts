import { Card, CardBody, Skeleton, Spinner } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton
        height='175px'
        width='600px'
      />
      <CardBody>
        <Spinner></Spinner>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
