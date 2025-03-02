import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'

const AddEditNotes = () => {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);

    return (
        <div>
            <div className='flex flex-col gap-2 '>

                <label className='input-label  text-sm text-cyan-500'>TITLE</label>
                <input
                    type="text"
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='Go To Gym At 5'
                    value={title}
                    onChange={(target) => setTitle(target.value)}
                />

            </div>
            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label  text-sm text-cyan-500">
                    Content
                </label>
                <textarea type="text"
                    className='text-sm  text-slate-50 outline-none bg-blue-950 p-2 rounded'
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={(target) => setContent(target.value)}
                />
            </div>

            <div className='mt-3'>
                <label className='input-label text-sm text-cyan-500'>
                    TAGS
                </label>
                <TagInput
                tags={tags}
                setTags={setTags}
                />
            </div>
            <button className='w-full hover:bg-cyan-950 mt-5 font-medium rounded cursor-pointer p-3 bg-black text-white' onClick={() => { }}>
                ADD
            </button>
        </div>
    )
}

export default AddEditNotes
