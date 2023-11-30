import { HStack, Image, Text, List, ListItem } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import modifyImage from "../services/modifyImage"

const GenreList = () => {
    const { data: genres, isLoading, error } = useGenre()
    return (

        <List justifyContent='flex-start'>

            {genres.map((genre) =>
                <ListItem py='5px' key={genre.id} overflow='hidden'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={modifyImage(genre.image_background)} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList
