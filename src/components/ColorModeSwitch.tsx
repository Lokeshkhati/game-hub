import { HStack, Switch, useColorMode, Text, Image, Button } from "@chakra-ui/react"
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (

    <HStack >
      <Button onClick={toggleColorMode} >
        {colorMode === 'dark' ?
          <Image src={sun} /> :
          <Image src={moon} />}
      </Button>
    </HStack>
  )
}
export { ColorModeSwitch }