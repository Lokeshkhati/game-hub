import { Box, HStack, Heading, Text, } from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch'
import SearchInput from "./SearchInput"
interface Props {
    onSearch: (searchText: string) => void
}
const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent='space-between' padding='15px'>
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
            >
                GAME HUB
            </Text>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}
export default Navbar