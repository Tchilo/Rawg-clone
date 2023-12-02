import genres from "../data/genres"

export interface Genre {
    id: number
    name: string
    image_background: string
    slug:string
}
const useGenre = () => ({data:genres,isLoading:false,error:null})

export default useGenre
