import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const isRouteError = isRouteErrorResponse(useRouteError());

  return (
    <>
      <NavBar />
      <Box margin={5}>
        <Heading>Oops...</Heading>
        <Text>{isRouteError ? 'The page does not exist' : 'Sorry, an unexpected error has occurred.'}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
