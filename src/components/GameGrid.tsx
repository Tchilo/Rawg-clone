import { Grid, GridItem, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"


const GameGrid = () => {
const {games,error} = useGames()
    return (
        <>
            {error && <Text>{ error}</Text> }
        <Grid>
            {
                games?.map((game) => <GridItem>
                    <Text>{game.name}</Text>
                </GridItem>)
            }

        </Grid>
            </>
    )
}

export default GameGrid
