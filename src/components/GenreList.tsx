
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    onnSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onnSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres()
    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <List>{
            data.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='50px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button onClick={() => onnSelectGenre(genre)} variant='link' fontSize='lg' >  {genre.name}</Button>
                    </HStack>
                </ListItem>)
        } </List>
    )
}
export default GenreList
