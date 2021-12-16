import Link from 'next/link'
import React from 'react'


const Card = ({ post }) => {
    return (
        <div
            className='bg-gray-200 bg-opacity-40 rounded-xl flex flex-col w-11/12 lg:w-80 mx-auto' 
            key={post.id}>
            <div className='px-4 py-4 '>
                <h3 className='text-xl font-bold pb-2'>{post.title}</h3>
                <p className='font-light'><span className='font-bold'>Author:</span> {post.author}</p>
                <p className='font-light'><span className='font-bold'>Comments:</span> {post.num_comments}</p>
                <p className='font-light'><span className='font-bold'>UpVote:</span> {post.ups}</p>
            </div>
            <Link href={post.url} className=''>
                <div className='bg-slate-400 bg-opacity-40 rounded-b-xl text-center mt-auto w-full'>
                    <button className='w-full font-bold text-xl py-4'>View Post</button>
                </div>
            </Link>
        </div>
    )
}

export default Card
