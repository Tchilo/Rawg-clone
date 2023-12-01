import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery{
  genre: Genre | null
  platform:Platform|null
}
const App = () => {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)


  return <Grid templateAreas={{ base: `" header" " main"`, lg: `"header header" "nav main"` }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
  >
    <GridItem area={'header'}>
      <Navbar />
    </GridItem>
    <Show above="lg">
      <GridItem area={'nav'} px={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelect={(genre) => setGameQuery({...gameQuery,genre})} />
      </GridItem>
    </Show>
    <GridItem area={'main'}>
      <HStack spacing={5} pl={2} mb={5}>
      <PlatformSelector platform={gameQuery.platform} onSelect={(platform) => setGameQuery({ ...gameQuery, platform })} />
      <SortSelector/>
      </HStack>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>
}

export default App
