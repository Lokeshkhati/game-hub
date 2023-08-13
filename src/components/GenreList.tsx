
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import { Genre } from "../entities/Genre"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"


const GenreList = () => {
    const { data, isLoading, error } = useGenres()
    const selectedGenreId = useGameQueryStore(selectedGenre => selectedGenre.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(selectedGenre => selectedGenre.setGenreId)
    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3} >Genres</Heading>
            <List>{
                data?.results?.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image objectFit='cover' boxSize='40px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre?.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => setSelectedGenreId(genre?.id)} variant='link' fontSize='lg' >  {genre.name}</Button>
                        </HStack>
                    </ListItem>)
            } </List>
        </>
    )
}
export default GenreList

