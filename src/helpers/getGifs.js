const api_key= '2EC869oghf14NRt1v0oVFEbz1iC3iwhF'
const limit = 12

export const getGifs= async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(category)}&limit=${limit}`
    const res = await fetch(url)
    const { data }= await res.json()
    const gifs = data.map(item => {
        return({
            id: item.id,
            title: item.title,
            url: item.images.original.url
        })
    })

    return gifs
}

