import { Box, HStack, } from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch'
import SearchInput from "./SearchInput"
interface Props {
    onSearch: (searchText: string) => void
}
const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Box>LOGO</Box>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}
export default Navbar