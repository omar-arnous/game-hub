// LIBRARY
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

// COMPONENTS
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

// CUSTOM HOOKS and SERVICES
import getCroppedImageUrl from '../services/image-url';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt="game img" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
