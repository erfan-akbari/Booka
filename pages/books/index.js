import CardV2 from '@/components/module/CardV2'
import ContentWrapper from '@/components/module/ContentWrapper'
import SelectBox from '@/components/module/SelectBox';
import SidebarV2 from '@/components/module/SidebarV2'
import useSelect from '@/hooks/useSelect';

const fs = require('fs')
const path = require('path')

export default function Books({ categories, books }) {

  const { filtersType } = useSelect()

  return (
    <div className='shadow-inner py-10'>
      <ContentWrapper>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5">
          <SidebarV2 categories={categories} />
          <main className='w-full lg:basis-[75%] flex flex-col gap-6'>
            <div className="flex justify-between mb-5">
              <h2 className='text-red-600 text-2xl'>همه محصولات</h2>
              <div className="w-72">
                <SelectBox data={filtersType} />
              </div>
            </div>
            <div className='w-full lg:basis-[75%] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {books.map(book => (
                <CardV2 key={book.id} {...book} />
              ))}
            </div>
          </main>
        </div>
      </ContentWrapper>
    </div>
  )
}

export async function getStaticProps() {
  const dbPath = path.join(process.cwd(), 'Data', 'db.json')
  const data = fs.readFileSync(dbPath)
  const parsedData = JSON.parse(data)

  return {
    props: {
      books: parsedData.books,
      categories: parsedData.categories
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}