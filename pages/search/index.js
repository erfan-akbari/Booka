import { useRouter } from "next/router"
import { useState } from "react"
import ContentWrapper from "@/components/module/ContentWrapper"
import CardV2 from "@/components/module/CardV2"

import connectToDB from "@/utils/db"
import booksModel from "@/models/book"
import articlesModel from "@/models/article"
import CardV4 from "@/components/module/CardV4"
import Link from "next/link"

export default function SearchResults({ books, articles }) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const EnterHandler = e => {
    if (e.keyCode === 13) {
      router.push(`/search?q=${search}`)
    }
  }

  const clearSearch = () => {
    setSearch(prev => prev.slice(0, -1))
  }

  return (
    <div className="mb-16 mt-5">
      <ContentWrapper>
        {/* //////// */}
        <div className="h-fit py-10 w-full flex gap-3">
          <div className="flex rounded-md overflow-hidden w-full">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => EnterHandler(e)}
              type="text"
              className="bg-slate-700 w-full rounded-md rounded-l-none text-base lg:text-lg pr-5 text-white"
              placeholder="جستجو..."
            />
            <Link href={`/search?q=${search}`} className="bg-gradient-to-r from-emerald-500 to-lime-600 text-white px-6 text-base lg:text-lg font-semibold py-4 rounded-l-md cursor-pointer">جستجو</Link>
          </div>
          <button
            className="bg-indigo-600 text-white hover:bg-indigo-800 px-6 text-base lg:text-lg font-semibold py-4 rounded-md cursor-pointer"
            onClick={clearSearch}
          >
            حذف
          </button>
        </div>
        {/* //////// */}
        <h2 className="mb-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          جستجو
          <span className="mr-5 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{router.query.q}</span>
        </h2>
        {/* //////// */}
        <h2 className="text-indigo-600 text-3xl font-black mb-5">کتاب‌ها</h2>
        <section className='flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {!books.length == 0 ? (
            books?.map(book => (
              <CardV2 key={book._id} {...book} />
            ))
          ) : (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full" role="alert">
              <p className="font-bold">کتابی یافت نشد</p>
            </div>
          )}
        </section>
        {/* //////// */}
        <h2 className="text-indigo-600 text-3xl font-black mt-10 mb-5">مقاله ها</h2>
        <section className='flex flex-col items-center sm:grid sm:grid-cols-2  gap-5'>
          {!articles.length == 0 ? (
            articles?.map(article => <CardV4 key={article._id} {...article} /> ) ) : (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full" role="alert">
              <p className="font-bold">مقاله ای یافت نشد</p>
            </div>
          )
          }
        </section>
        {/* //////// */}
      </ContentWrapper>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  connectToDB()
  const { q } = query

  const books = await booksModel.find({ title: { $regex: q } })
  const articles = await articlesModel.find({ title: { $regex: q } })

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
      articles: JSON.parse(JSON.stringify(articles))
    }
  }
} 