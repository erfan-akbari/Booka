import Carousel from "@/components/module/Carousel";
import SectionBookDetails from "@/components/template/SectionBookDetails";
import ContentWrapper from "@/components/module/ContentWrapper";
import Tab from "@/components/template/Tab";
import Title2 from "@/components/module/Title2";
import Comments from "@/components/module/Comments";
import Alert from "@/components/module/Alert"

import connectToDB from "@/utils/db";
import topRatedBooksModel from "@/models/topRatedBooks"
import booksModel from "@/models/book"


export default function BookDetails({ book, relatedBooks }) {
  return (
    <main className="shadow-inner">
      <Alert title={'با کد تخفیف Salam اولین کتاب الکترونیکی یا صوتی‌ات را با ۵۰٪ تخفیف از بوکا دریافت کن.'} />
      <SectionBookDetails data={...book} />
      <ContentWrapper>
        {/* description */}
        <Title2 value={'شرح کتاب'} />
        <div className="shadow-md border border-gray-100 font-semibold p-8 rounded text-gray-500 bg-gray-50 mt-5 mb-8">
          توضیحات محصول
          لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته، حال و آینده را شامل گردد. سی و پنج درصد از طراحان در قرن پانزدهم میبایست پرینتر در ستون و سطر حروف لازم است، بلکه شناخت این ابزار گاه اساسا بدون هدف بود و سئوالهای زیادی در گذشته بوجود می آید، تنها لازمه آن بود.
          لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته، حال و آینده را شامل گردد. سی و پنج درصد از طراحان در قرن پانزدهم میبایست پرینتر در ستون و سطر حروف لازم است، بل.
        </div>
        {/* table book info */}
        <Title2 value={'مشخصات کتاب'} />
        <div className="shadow-md border border-gray-100 font-semibold p-8 rounded text-gray-500 bg-gray-50 mt-10">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-scroll">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    نویسنده
                  </th>
                  <th scope="col" className="px-6 py-3">
                    شابک
                  </th>
                  <th scope="col" className="px-6 py-3">
                    رده بندی کتاب
                  </th>
                  <th scope="col" className="px-6 py-3">
                    قطع (سایز)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    نوع جلد
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعداد صفحه
                  </th>
                  <th scope="col" className="px-6 py-3">
                    سایر توضیحات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ویکتور فرانکل
                  </th>
                  <td className="px-6 py-4">
                    21584586589210125
                  </td>
                  <td className="px-6 py-4">
                    فلسفه و روانشناسی
                  </td>
                  <td className="px-6 py-4">
                    رقعی
                  </td>
                  <td className="px-6 py-4">
                    شومیز
                  </td>
                  <td className="px-6 py-4">
                    116
                  </td>
                  <td className="px-6 py-4">
                    <ul className='text-start list-disc'>
                      <li>جزو پرفروش ترین کتاب ها و رمان های ایران جزو فهرست کتاب هایی که زندگی تان را دگرگون خواهند کرد</li>
                      <li>بهترین کتاب از نظر مردم</li>
                      <li>دارای فایل pdf و صوت</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Tab */}
        <Tab />
        {/* Carousel */}
        <Carousel data={relatedBooks} title={'محصولات مرتبط'} type={'featured'} />
        {/* Comments */}
        <Comments />
      </ContentWrapper>
    </main>
  )
}

export async function getStaticPaths() {
  connectToDB()
  const books = await topRatedBooksModel.find()

  const paths = books?.slice(0, 3).map(book => {
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
  const book = await topRatedBooksModel.findOne({ _id: params.id })
  const relatedBooks = await booksModel.find({ category: book.category })

  if (!book) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      book: JSON.parse(JSON.stringify(book)),
      relatedBooks: JSON.parse(JSON.stringify(relatedBooks)),
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}