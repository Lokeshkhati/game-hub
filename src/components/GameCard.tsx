import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import grtCroppedImageUrl from '../services/image-url'
import CriticScore from "./CriticScore";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game.slug, 'game')
  return (
    <Card >
      <Image src={grtCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent='space-between' >
          <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
          <CriticScore score={game?.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          <Link to={`/games/${game?.slug}`}>{game.name}</Link>

        </Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;


