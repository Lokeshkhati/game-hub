import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {

    const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform)
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (data.length === 0) return <Text fontSize='2xl' color='red.400' textAlign='center'>Data not found</Text>
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={6} >
                {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton} > <GameCardSkeleton key={skeleton} /></GameCardContainer>)}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>  <GameCard game={game} /></GameCardContainer>
                ))}</SimpleGrid>
        </>
    )
}
export default GameGrid 