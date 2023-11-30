import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import modifyImage from "../services/modifyImage"

interface Props {
    onSelect:(genre:Genre) => void
}
const GenreList = ({onSelect}:Props) => {
    const { data: genres, isLoading, error } = useGenre()

    if (isLoading) return <Spinner />
    if(error) return null
    return (

        <List justifyContent='flex-start'>

            {genres.map((genre) =>
                <ListItem py='5px' key={genre.id} overflow='hidden'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={modifyImage(genre.image_background)} />
                        <Button onClick={() => onSelect(genre)
                        } variant='link' fontSize='lg'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList
