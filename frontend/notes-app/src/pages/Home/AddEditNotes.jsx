import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from 'react-icons/md';


const AddEditNotes = ({ noteData, type, onClose }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);

    const [error, setError] = useState(null);

    //Add Note
    const addNewNote = async () => {}

    //Edit Note
    const editNote = async () => {}

    const handleAddNote = () => {
        if (!title){
            setError("Please enter the Title")
            return;
        }
        if (!content){
            setError("Please enter the content")
            return;
        }
            setError("")
        
        if (type === "edit") {
            editNote()
        }
        else{
            addNewNote()    
        }
    }
    return (
        <div className='relative'>

            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50 cursor-pointer'
                onClick={onClose}
            >

                <MdClose
                    className="text-xl text-slate-500 "
                />

            </button>

            <div className='flex flex-col gap-2 '>

                <label className='input-label  text-sm text-cyan-500'>TITLE</label>
                <input
                    type="text"
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='Go To Gym At 5'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    onChange={(e) => setContent(e.target.value)}
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

            {error && <p className='text-red-500 text-xs pt-4'>{error}</p> }
            <button className='w-full hover:bg-cyan-950 mt-5 font-medium rounded cursor-pointer p-3 bg-black text-white'
                onClick={handleAddNote}>
                ADD
            </button>
        </div>
    )
}

export default AddEditNotes
