import Carousel from "@/components/template/Carousel";
import SectionBookDetails from "@/components/template/SectionBookDetails";
import ContentWrapper from "@/components/module/ContentWrapper";
import Tab from "@/components/template/Tab";

export default function BookDetails({ book, featured }) {
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
      book: findBook,
      featured: parsedData.featured
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}