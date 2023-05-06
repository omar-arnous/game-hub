import { Box, Button, Heading, Text } from '@chakra-ui/react';
import {
  isRouteErrorResponse,
  useRouteError,
  useNavigate,
} from 'react-router-dom';
import Navbar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpected error occured.'}
        </Text>
        <Box paddingTop={5}>
          <Button onClick={() => navigate('/')}>Back To Home</Button>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
