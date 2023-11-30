import { VStack } from "@chakra-ui/react"
import useData from "../hooks/useData"

const GenreList = () => {
    const {data:genres,isLoading,error} = useData<Genre>('/genres')
    return (
      
    <VStack>
            {genres.map((genre) => <li key={genre.id}>{ genre.name}</li>)}  
    </VStack>
  )
}

export default GenreList
