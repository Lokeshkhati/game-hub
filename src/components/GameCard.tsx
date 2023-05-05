import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import grtCroppedImageUrl from '../services/image-url'
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={grtCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
          <CriticScore score={game?.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name} </Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;


