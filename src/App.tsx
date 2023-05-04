import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components";
import GameGrid from "./components/GameGrid";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        md: `"nav nav" "aside main"`
      }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* Main */}
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default App;
