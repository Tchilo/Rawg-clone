import brokenImage from '../assets/no-image-placeholder.webp'
const modifyImage = (url: string) => {
    if(!url) return brokenImage
    const target = 'media/'
    const index = url.indexOf('media/') + target.length
    return url.slice(0,index) +'crop/600/400/'+ url.slice(index)
}

export default modifyImage
