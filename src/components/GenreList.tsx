import { VStack } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"

const GenreList = () => {
    const {genres,isLoading,error} = useGenre()
    return (
      
    <VStack>
            {genres.map((genre) => <li key={genre.id}>{ genre.name}</li>)}  
    </VStack>
  )
}

export default GenreList
