import React, { useState } from 'react'
import { MdAdd, MdClose } from "react-icons/md"

const TagInput = ({ tags, setTags, }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addNewTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue('');
        }
    }

    const handlKeyDown = (e) => {
        if (e.key == "Enter") {
            addNewTag()
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))

    }

    return (
        <div className="text-black">

            {tags.length > 0 && (
                <div className='flex items-center gap-2 flex-wrap mt-2'>
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-200 rounded flex items-center">
                            #{tag}
                            <button onClick={() => handleRemoveTag(tag)} className="ml-2 text-red-500 hover:text-red-700">
                                <MdClose />
                            </button>
                        </span>
                    ))}
                </div>)}

            <div className='flex items-center gap-4 mt-3'>
                <input type="text"
                    className='text-sm bg-trasparent border px-3 py-2 rounded outline-none' placeholder='Add Tags'
                    onChange={handleInputChange}
                    onKeyDown={handlKeyDown}
                />

                <button className='w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-300' onClick={() => { addNewTag() }} >
                    <MdAdd
                        className="text-2xl text-blue-700 hover:text-blue-900 cursor-pointer"
                    />
                </button>

            </div>
        </div>
    )
}

export default TagInput
