import CardV2 from '@/components/module/CardV2'
import ContentWrapper from '@/components/module/ContentWrapper'
import SelectBox from '@/components/module/SelectBox';
import SidebarV2 from '@/components/module/SidebarV2'
import { categories, books } from '@/Data/HomData'
import useSelect from '@/hooks/useSelect';

export default function Books() {

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