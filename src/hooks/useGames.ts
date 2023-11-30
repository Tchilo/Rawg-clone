import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Platform {
    id: number
    slug: string
    name:string
}
export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic:number
}

interface Response {
    count: number
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, seterror] = useState()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController()
setIsLoading(true)
        apiClient.get<Response>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if(err instanceof CanceledError) return
                seterror(err.message)
                setIsLoading(false)
            })
        
        return () => controller.abort()
    }, [])
    return { games, error,isLoading }
}

export default useGames