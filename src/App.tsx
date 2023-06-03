import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector, { Sort, SortBy } from './components/SortSelector';
import { Genre } from './hooks/useGenresHttp';
import { Platform } from './hooks/usePlatformsHttp';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: Sort;
  searchText: string;
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
        <NavBar onSearch={(searchText: string) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="0.5rem">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre: Genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform: Platform) => setGameQuery({ ...gameQuery, platformId: platform.id })}
              />
            </Box>
            <SortSelector
              selectedSort={gameQuery.sort}
              onSelectSort={(sort: Sort) => setGameQuery({ ...gameQuery, sort })}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
