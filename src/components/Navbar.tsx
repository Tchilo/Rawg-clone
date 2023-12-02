import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/lambda.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
const Navbar = () => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='40px' />
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default Navbar
