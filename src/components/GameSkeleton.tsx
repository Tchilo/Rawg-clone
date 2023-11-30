import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
const GameSkeleton = () => {
    return (
        <Card  borderRadius={8} overflow={'hidden'} w='300px'>
            <Skeleton h='200px'/>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameSkeleton
