import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}
const ScoreBadge = ({ score }: ScoreProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize='14px'
      paddingX={4}
      borderRadius='14px'
      color={color}>
      {score}
    </Badge>
  );
};

export default ScoreBadge;
