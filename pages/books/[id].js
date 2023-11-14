import Carousel from "@/components/template/Carousel";
import SectionBookDetails from "@/components/template/SectionBookDetails";
import ContentWrapper from "@/components/module/ContentWrapper";
import Tab from "@/components/template/Tab";
import connectToDB from "@/utils/db";
import booksModel from "@/models/book"

export default function BookDetails({ book, featured }) {
  return (
    <main className="shadow-inner">
      <SectionBookDetails data={...book} />
      <ContentWrapper>
        <Tab />
        {/* <Carousel data={featured} title={'محصولات مرتبط'} /> */}
      </ContentWrapper>
    </main>
  )
}

export async function getStaticPaths() {
  connectToDB()
  const books = await booksModel.find()

  const paths = books.slice(0, 3)?.map(book => {
    return {
      params: { id: String(book._id) }
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  connectToDB()
  const book = await booksModel.findOne({ _id: params.id })

  if (!book) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      book: JSON.parse(JSON.stringify(book))
      // featured: parsedData.featured
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}