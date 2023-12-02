import { FaWindows, FaLinux, FaApple, FaAndroid, FaPlaystation, FaXbox } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { SiNintendo } from 'react-icons/si'
import { IconType } from 'react-icons'

interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap:{[key:string]:IconType} = {
        pc: FaWindows,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        web: BsGlobe,
        nintendo:SiNintendo
    }
    return (
            <HStack my={1}>
                {platforms.map((platform) => <Icon key={platform.id} color='gray.500' as={iconMap[platform.slug] } />)}
            </HStack>
    )
}

export default PlatformIconList
