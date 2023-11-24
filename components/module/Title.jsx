import React from 'react'

function Title({ value }) {
    return (
        <h2 className='text-red-600 text-xl md:text-3xl font-bold my-5 drop-shadow-lg hover:drop-shadow-2xl underline'>
            {value}
        </h2>
    )
}

export default Title