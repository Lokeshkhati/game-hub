import { Box, HStack, Heading, Text, } from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch'
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <HStack justifyContent='space-between' padding='15px'>
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
            >
                <Link to='/'>GAME HUB</Link>
            </Text>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}
export default Navbar