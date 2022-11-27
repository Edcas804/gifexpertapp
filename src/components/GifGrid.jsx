import { GifGridItem } from './GifGridItem'
import { useFetchGifs }  from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs(category)

    return (
        <>
            <h3 className="w-full text-center py-2 capitalize">{category}</h3>
            {
                loading && <i>Loading...</i>
            }
            <div className="w-full p-3 flex flex-row flex-wrap items-center justify-center">
                {
                    images.map((img) => (
                        <GifGridItem  key={img.id} {...img} />
                    ))
                }
                {
                    (images.length < 1) && <i className="text-sm text-gray-500 bg-rose-400 text-white p-1 rounded-full"> without results for <strong> {category}</strong></i>
                }
            </div>
        </>
    )
}
