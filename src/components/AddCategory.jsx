import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue ] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setCategories(cat => [inputValue, ...cat])
            setInputValue('')
        }
    }
    return (
        <form className="w-full flex flex-row justify-center py-2"action="" onSubmit={handleSubmit}>
            <input onInput={handleInput}
            value={inputValue}
            placeholder="Search"
            className="w-1/2 p-2 border-2 border-gray-200 rounded-full" type="text" />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
