import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface Game {
    id: number
    name: string
}

interface Response {
    count: number
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, seterror] = useState()

    useEffect(() => {
        const controller = new AbortController()

        apiClient.get<Response>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch((err) => {
                if(err instanceof CanceledError) return
                seterror(err.message)
            })
        
        return () => controller.abort()
    }, [])
    return { games, error }
}

export default useGames
