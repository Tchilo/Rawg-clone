import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Grid, GridItem, Text } from "@chakra-ui/react"
interface Game {
    id: number
    name: string
}

interface Response {
    count: number
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, seterror] = useState()

    useEffect(() => {
        apiClient.get<Response>('/games')
            .then(res => setGames(res.data.results))
            .catch((err) => seterror(err.message))
    }, [])
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
