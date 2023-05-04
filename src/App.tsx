import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
const App = () => {
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default App;
