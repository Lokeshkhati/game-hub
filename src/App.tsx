import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from 'react';
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}


const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        md: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        md: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};
export default App;
