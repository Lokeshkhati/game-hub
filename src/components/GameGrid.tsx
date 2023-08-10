import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
    gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {

    const { error, data, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (error) return <Text>{error?.message}</Text>
    if (!isLoading && (data?.results?.length === 0)) return <Text fontSize='2xl' color='red.400' textAlign='center'>Data not found</Text>

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={6} >
            {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton} > <GameCardSkeleton key={skeleton} /></GameCardContainer>)}
            {data?.results?.map((game) => (
                <GameCardContainer key={game.id}>  <GameCard game={game} /></GameCardContainer>
            ))}</SimpleGrid>
    )
}
export default GameGrid 