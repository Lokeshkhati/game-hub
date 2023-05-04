import { Box, HStack, } from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch'
const Navbar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Box>LOGO</Box>
            <ColorModeSwitch />
        </HStack>
    )
}
export default Navbar