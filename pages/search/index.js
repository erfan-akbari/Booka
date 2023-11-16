import ContentWrapper from "@/components/module/ContentWrapper"
import CardV2 from "@/components/module/CardV2"
import { useRouter } from "next/router"

import connectToDB from "@/utils/db"
import booksModel from "@/models/book"
import CardV4 from "@/components/module/CardV4"

export default function SearchResults({ books }) {
  const { query } = useRouter()

  return (
    <div className="mb-16 mt-5">
      <ContentWrapper>
        <h2 className="mb-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          جستجو
          <span className="mr-5 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{query.q}</span>
        </h2>
        <h2 className="text-indigo-600 text-3xl font-black mb-5">کتاب‌ها</h2>
        <section className='flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {books.length === 0 && (
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full" role="alert">
              <p className="font-bold">کتابی یافت نشد</p>
            </div>
          )}
          {books?.slice(0, 8).map(book => (
            <CardV2 key={book._id} {...book} />
          ))}
        </section>
        <h2 className="text-indigo-600 text-3xl font-black mt-10 mb-5">مقاله ها</h2>
        <section className='flex flex-col items-center sm:grid sm:grid-cols-2  gap-5'>
          <CardV4 />
          <CardV4 />
          <CardV4 />
          <CardV4 />
        </section>
      </ContentWrapper>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  connectToDB()

  const { q } = query
  const books = await booksModel.find({ title: { $regex: q } })

  return {
    props: {
      books: JSON.parse(JSON.stringify(books))
    }
  }
} 