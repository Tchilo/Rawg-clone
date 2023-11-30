import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameSkeleton from "./GameSkeleton"


const GameGrid = () => {
    const { games, error, isLoading } = useGames()
    const skeletons = [1,2,3,4,5,6]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} p='10px' spacing={4}>
                { isLoading && skeletons.map((skeleton) => <GameSkeleton key={skeleton}/>)}
                {
                    games?.map((game) => <GameCard key={game.id} game={game} />)
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid