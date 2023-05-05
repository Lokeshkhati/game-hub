import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {

    const { error, data, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (error) return <Text>{error}</Text>
    if (!isLoading && (data.length === 0)) return <Text fontSize='2xl' color='red.400' textAlign='center'>Data not found</Text>

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={6} >
            {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton} > <GameCardSkeleton key={skeleton} /></GameCardContainer>)}
            {data.map((game) => (
                <GameCardContainer key={game.id}>  <GameCard game={game} /></GameCardContainer>
            ))}</SimpleGrid>
    )
}
export default GameGrid 