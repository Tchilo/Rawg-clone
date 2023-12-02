import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import bullsEeye from '../assets/bulls-eye.webp'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props {
    rating:number
}
const Emoji = ({ rating }: Props) => {
    const emojisMap:{[key:number]:ImageProps} = {
        3: { src: meh, alt: 'meh',boxSize:'25px' },
        4: { src: thumbsUp, alt:'recommended',boxSize:'25px'},
        5: { src: bullsEeye, alt:'exceptional',boxSize:'35px'},
        
    }
  return (
      <Image {...emojisMap[rating]} mt={1}/>
  )
}

export default Emoji
