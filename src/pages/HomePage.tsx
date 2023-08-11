import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: ` " main"`,
                md: ` "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                md: '200px 1fr'
            }}
        >

            <Show above="md">
                <GridItem area="aside" paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>

            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector />
                        </Box>
                        <SortSelector />
                    </Flex>
                    <GameGrid />
                </Box>
            </GridItem>
        </Grid >
    )
}
export default HomePage