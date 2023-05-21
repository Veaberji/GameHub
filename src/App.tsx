import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector, { Sort, SortBy } from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    sort: { reversed: false, sortBy: SortBy.byRelevance },
  } as GameQuery);

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: '1fr', lg: '12rem 1fr' }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="0.5rem">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={4} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform: Platform) => setGameQuery({ ...gameQuery, platform })}
            />
          </Box>

          <SortSelector
            selectedSort={gameQuery.sort}
            onSelectSort={(sort: Sort) => setGameQuery({ ...gameQuery, sort })}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
