import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

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
          <Button>
            <Link to="/">Back to Home</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
