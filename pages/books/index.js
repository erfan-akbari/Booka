import CardV2 from '@/components/module/CardV2'
import ContentWrapper from '@/components/module/ContentWrapper'
import SelectBox from '@/components/module/SelectBox';
import SidebarV2 from '@/components/module/SidebarV2'
import useSelect from '@/hooks/useSelect';
import { useEffect, useState } from 'react';
import LoaderShimmer from '@/components/module/LoaderShimmer';

import connectToDB from '@/utils/db';
import booksModel from "@/models/book"
import categoriesModel from "@/models/categories"
import writersModel from "@/models/writer"
import translatorsModel from "@/models/translator"
import publicationsModel from "@/models/publication"

export default function Books(props) {
  const { filtersType } = useSelect()
  const { books } = props
  // const [books, setBooks] = useState(props.books)
  const [isloading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')

  const changeHandler = (value) => {
    setValue(value)
    if (value) {
      sortBooksHandler(value)
    }
  }

  useEffect(() => {
    setIsLoading(true)
  }, [books])

  setTimeout(() => {
    setIsLoading(false)
  }, 3000);

  const sortBooksHandler = async (val) => {

    switch (val) {
      case '1':
        books.sort((a, b) => b.discount - a.discount)
        break;

      case '2':
        books.sort((a, b) => a.discount - b.discount)
        break;

      case '3':
        books.sort((a, b) => a.price - b.price)
        break;

      case '4':
        books.sort((a, b) => b.price - a.price)
        break;

      case '5':
        books.sort((a, b) => a.score - b.score)
        break;

      case '6':
        books.sort((a, b) => b.score - a.score)
        break;

      default:
        books
        break;
    }
  }

  return (
    <div className='shadow-inner py-10'>
      <ContentWrapper>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5">
          <SidebarV2 data={props} />
          <main className='w-full lg:basis-[75%] flex flex-col gap-6'>
            <div className="flex justify-between mb-5">
              <h2 className='text-red-600 text-2xl'>همه محصولات</h2>
              <div className="w-72">
                <SelectBox value={value} data={filtersType} changeHandler={changeHandler} />
              </div>
            </div>
            {!isloading ? (
              <div className='w-full lg:basis-[75%] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {books?.map(book => (
                  <CardV2 key={book._id} {...book} />
                ))}
              </div>
            ) : (
              <div className='w-full lg:basis-[75%] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
              </div>
            )}
          </main>
        </div>
      </ContentWrapper>
    </div>
  )
}

export async function getServerSideProps({ query }) {

  connectToDB()
  let books;

  if (query.cat) {
    books = await booksModel.find({ category: query.cat })
  } else if (query.t) {
    books = await booksModel.find({ translators: query.t })
  } else if (query.w) {
    books = await booksModel.find({ writer: query.w })
  } else if (query.p) {
    books = await booksModel.find({ publication: query.p })
  } else {
    books = await booksModel.find()
  }

  const categories = await categoriesModel.find()
  const writers = await writersModel.find()
  const translators = await translatorsModel.find()
  const publications = await publicationsModel.find()

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
      categories: JSON.parse(JSON.stringify(categories)),
      writers: JSON.parse(JSON.stringify(writers)),
      translators: JSON.parse(JSON.stringify(translators)),
      publications: JSON.parse(JSON.stringify(publications)),
    }
  }
}