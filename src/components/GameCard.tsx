import { Card, CardBody, Heading, Image,HStack } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import modifyImage from "../services/modifyImage"

interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={8} overflow={'hidden'} w='300px'>
            <Image src={modifyImage(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard