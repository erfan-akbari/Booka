import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'

function SearchBox({ styles }) {
    const [search, setSearch] = useState('')
    const { asPath } = useRouter()
    const EnterHandler = e => {
        if (e.keyCode === 13) {
            Router.push(`/search?q=${search}`)
        }
    }

    useEffect(() => {
        setSearch('')
    }, [asPath])

    return (
        <div className={`bg-stone-50 items-center border py-1.5 px-3 rounded-lg ${styles}`}>
            <input
                className="outline-none border-none bg-transparent"
                type="text"
                placeholder="جستجو..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => EnterHandler(e)}
            />
            <Link className="text-black hover:text-red-600" href={`/search?q=${search}`}>
                <CiSearch className='text-lg' />
            </Link>
        </div>
    )
}

export default SearchBox