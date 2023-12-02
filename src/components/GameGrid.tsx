import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameSkeleton from "./GameSkeleton"
import GameCardContainer from "./GameCardContainer"
// import { Genre } from "../hooks/useGenre"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
    const { data: games, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]
    if (error) return <Text>{error}</Text>
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} p='10px' spacing={6}>
            {isLoading && skeletons.map((skeleton) =>
                <GameCardContainer key={skeleton}>
                    <GameSkeleton />
                </GameCardContainer>
            )}
            {
                games?.map((game) => <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>)
            }
        </SimpleGrid>
    )
}

export default GameGrid
