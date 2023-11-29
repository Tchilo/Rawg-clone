import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

const App = () => {
  return <Grid templateAreas={{ base: `" header" " main"`, lg: `"header header" "nav main"` }}>
    <GridItem area={'header'}>
      <Navbar />
    </GridItem>
    <Show above="lg">
      <GridItem area={'nav'} bg='blue.400'>nav</GridItem>
    </Show>
    <GridItem area={'main'} bg='pink.400'>main</GridItem>
  </Grid>
}

export default App
