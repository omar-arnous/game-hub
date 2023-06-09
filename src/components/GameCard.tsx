// LIBRARY
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

// COMPONENTS
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

// CUSTOM HOOKS and SERVICES
import getCroppedImageUrl from '../services/image-url';
import Game from '../entities/Game';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt="game img" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
