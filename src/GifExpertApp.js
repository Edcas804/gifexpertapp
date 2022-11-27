import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories ] = useState([])
    return(
        <>
            <h1 className="w-full text-3xl text-center py-4">GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {
                categories.map(item => (
                    <GifGrid key={Math.random()*10} category={item} />
                ))
            }
        </>
    )
}
