import { AxiosRequestConfig, CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { Genre } from "./useGenre"

interface Response<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, seterror] = useState()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController()
setIsLoading(true)
        apiClient.get<Response<T>>(endpoint, { signal: controller.signal,...requestConfig })
            .then(res => {
                setData(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if(err instanceof CanceledError) return
                seterror(err.message)
                setIsLoading(false)
            })
        
        return () => controller.abort()
    },deps? [...deps]:[])
    return { data, error,isLoading } 
}

export default useData
