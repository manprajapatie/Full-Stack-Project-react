import React from 'react'
import { MdOutlinePushPin } from 'react-icons/md'

import { MdCreate, MdDelete } from 'react-icons/md'

const NoteCard = ({ title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote }) => {
  return (
    <div className='border rounded-2xl p-4 bg-sky-950 hover:shadow-lg transition-all ease-in-out'>
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium ">
            {title}
          </h6>
          <span className='text-xs text-slate-500  '>{date}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn hover:text-sky-400 hover:cursor-pointer ${isPinned ? 'text-gray-300' : 'text-slate-200'}`}
          onClick={onPinNote} />
      </div>
      <p className='text-xs text-slate-50 mt-2'>{content?.slice(0, 60)}</p>

      <div className='flex items-center justify-between mt-2'>
        <div className="text-xm text-slate-400">{tags}</div>
        <div className='flex items-center gap-2'>

          <MdCreate
            className='icon-btn hover:text-green-400'
            onClick={onEdit}
          />

          <MdDelete
            className='icon-btn hover:text-red-400'
            onClick={onDelete}
          />

        </div>
      </div>
    </div>
  )
}

export default NoteCard;
