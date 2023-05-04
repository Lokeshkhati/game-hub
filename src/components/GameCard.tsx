import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import { grtCroppedImageUrl } from '../services/image-url'
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}


const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={game.background_image} />
      {/* <Image src={grtCroppedImageUrl(game.background_image)} /> */}
      <CardBody>
        <Heading fontSize='2xl'>{game.name} </Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
          <CriticScore score={game?.metacritic} />
        </HStack> 
      </CardBody>
    </Card>
  );
};
export default GameCard;


