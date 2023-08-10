import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from 'react';

interface Props {
    gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {

    const { error, data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (error) return <Text>{error?.message}</Text>
    // if (!isLoading && (data?.results?.length === 0)) return <Text fontSize='2xl' color='red.400' textAlign='center'>Data not found</Text>

    return (
        <Box padding='10px' >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} >
                {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton} > <GameCardSkeleton key={skeleton} /></GameCardContainer>)}
                {data?.pages.map((page, index) => <React.Fragment key={index}>
                    {page.results.map((game) => <GameCardContainer key={game.id}>  <GameCard game={game} /></GameCardContainer>)}
                </React.Fragment>)}
            </SimpleGrid>
            {hasNextPage && <Button onClick={() => fetchNextPage()} marginY={5}>{isFetchingNextPage ? "Loading..." : "Load more"}</Button>}
        </Box>
    )
}
export default GameGrid 