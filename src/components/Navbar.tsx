import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/lambda.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
    onSearch: (text: string) => void
}
const Navbar = ({onSearch}:Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='40px' />
            <SearchInput onSearch={(onSearch)}/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default Navbar
