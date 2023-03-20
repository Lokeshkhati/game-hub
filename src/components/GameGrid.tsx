import { Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const GameGrid = () => {
   
return (
    <>
        {error && <Text>{error}</Text>}
        <ul>{games.map((game) => (
            <li key={game.id}>{game.name}</li>
        ))}</ul>

    </>
)
}
export default GameGrid