// REACT
import { ReactNode } from 'react';

// LIBRARY
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .3s ease-in',
      }}
      borderRadius={10}
      overflow="hidden"
      width="100%"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
