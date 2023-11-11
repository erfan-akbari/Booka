import { books } from "@/Data/HomData"
import Carousel from "@/components/template/Carousel";
import SectionBookDetails from "@/components/template/SectionBookDetails";
import { featured } from "../../Data/HomData"
import ContentWrapper from "@/components/module/ContentWrapper";
import Tab from "@/components/template/Tab";

const fs = require('fs')
const path = require('path')

export default function BookDetails({ book }) {
  return (
    <main className="shadow-inner">
      <SectionBookDetails data={...book} />
      <ContentWrapper>
        <Tab />
        <Carousel data={featured} title={'محصولات مرتبط'} />
      </ContentWrapper>
    </main>
  )
}

export async function getStaticPaths() {
  const dbAddress = path.join(process.cwd(), 'Data', 'db.json')
  const data = fs.readFileSync(dbAddress)
  const parsedData = JSON.parse(data)

  const paths = parsedData.books.slice(0, 3).map(book => {
    return {
      params: { id: String(book.id) }
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const dbAddress = path.join(process.cwd(), 'Data', 'db.json')
  const data = fs.readFileSync(dbAddress)
  const parsedData = JSON.parse(data)

  const [findBook] = parsedData.books.filter(book => String(book.id) === String(params.id))

  if (!findBook) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      book: findBook
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}