import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featureImage}) {
 const print =  console.log(title)
    
  return (
    
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
              
                <img src={service.getFilePreview(featureImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
        <div className='text-xl font-bold'>{print}</div>
    </Link>
  )
}

export default PostCard