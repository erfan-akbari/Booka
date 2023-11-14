import HeroBanner from "@/components/template/HeroBanner"
import ContentWrapper from "@/components/module/ContentWrapper"
import BloggSlider from "@/components/template/BloggSlider"
import BooksBanner from "@/components/template/BooksBanner"
import Carousel from "@/components/template/Carousel"
import NewBooks from "@/components/template/NewBooks"
import TopPublishers from "@/components/template/TopPublishers"

import connectToDB from "@/utils/db"
import booksModel from "@/models/book"
import bookBannerModel from "@/models/bookBanner"
import featuredModel from "@/models/featured"
import topRatedBooksModel from "@/models/topRatedBooks"

export default function Home({ bookBanner, featured, books, topRatedBooks }) {
  return (
    <div>
      <HeroBanner />
      <ContentWrapper>
        <main>
          <BooksBanner data={bookBanner} />
          <Carousel data={featured} title={'فروش ویژه جشنواره'} />
          <NewBooks data={books} />
          <Carousel data={topRatedBooks} title={'پرامتیازترین کتاب‌ها'} />
          <BloggSlider title={'آخرین مطالب سایت'} />
          <TopPublishers title={'ناشران برتر'} />
        </main>
      </ContentWrapper>
    </div>
  )
}

export async function getStaticProps() {
  connectToDB()
  const books = await booksModel.find()
  const bookBanner = await bookBannerModel.find()
  const featured = await featuredModel.find()
  const topRatedBooks = await topRatedBooksModel.find()

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
      bookBanner: JSON.parse(JSON.stringify(bookBanner)),
      featured: JSON.parse(JSON.stringify(featured)),
      topRatedBooks: JSON.parse(JSON.stringify(topRatedBooks)),
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}