import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

const App = () => {
  return <Grid templateAreas={{ base: `" header" " main"`, lg: `"header header" "nav main"` }}>
    <GridItem area={'header'}>
      <Navbar />
    </GridItem>
    <Show above="lg">
      <GridItem area={'nav'}>
        <GenreList/>
      </GridItem>
    </Show>
    <GridItem area={'main'}>
      <GameGrid />
    </GridItem>
  </Grid>
}

export default App
