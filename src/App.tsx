import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

const App = () => {
  return <Grid templateAreas={{ base: `" header" " main"`, lg: `"header header" "nav main"` }}
    templateColumns={{
      base: '1fr',
      lg:'200px 1fr'
  }}
  >
    <GridItem area={'header'}>
      <Navbar />
    </GridItem>
    <Show above="lg">
      <GridItem area={'nav'} px={5}>
        <GenreList/>
      </GridItem>
    </Show>
    <GridItem area={'main'}>
      <GameGrid />
    </GridItem>
  </Grid>
}

export default App
