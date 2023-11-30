import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiClient from "../services/api-client"

export interface Genre {
    id: number
    name: string
    image_background: string
    slug:string
}
interface Response {
    count: number
    results: Genre[]
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, seterror] = useState()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController()
setIsLoading(true)
        apiClient.get<Response>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if(err instanceof CanceledError) return
                seterror(err.message)
                setIsLoading(false)
            })
        
        return () => controller.abort()
    }, [])
    return { genres, error,isLoading } 
}

export default useGenre
