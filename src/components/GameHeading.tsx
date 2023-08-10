import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import usePlatform from "../hooks/usePlatform"

interface Props {
    gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Props) => {

    const platform = usePlatform(gameQuery.platformId)
    const genre = usePlatform(gameQuery.genreId)

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
        <Heading as='h1' marginY={5}>{heading}</Heading>
    )
}
export default GameHeading