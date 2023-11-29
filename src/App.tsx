import { Grid, GridItem, Show } from "@chakra-ui/react"

const App = () => {
  return <Grid templateAreas={{ base: `" header" " main"`, lg: `"header header" "nav main"` }} gap={2}>
    <GridItem area={'header'} bg='red.400'>header</GridItem>
    <Show above="lg">
      <GridItem area={'nav'} bg='blue.400'>nav</GridItem>
    </Show>
    <GridItem area={'main'} bg='pink.400'>main</GridItem>
  </Grid>
}

export default App
