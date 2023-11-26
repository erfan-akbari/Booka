import React from 'react'

function Title({ value }) {
    return (
        <h2 className='text-red-600 text-xl md:text-3xl font-bold drop-shadow-lg hover:drop-shadow-2xl pb-2'>
            {value}
        </h2>
    )
}

export default Title