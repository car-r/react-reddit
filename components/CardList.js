import React from 'react'
import Card from './Card'

const CardList = ({ updatedData }) => {
    return (
        <div className='grid grid-cols-1 mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {updatedData.map((post) => (
                <Card post={post} key={post.id} />
            ))}
        </div>
    )
}

export default CardList
