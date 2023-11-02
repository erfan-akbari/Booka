import ContentWrapper from '@/components/module/ContentWrapper'
import Sidebar from '@/components/module/Sidebar'
import Link from 'next/link'



function Blogs() {
  return (
    <div className='shadow-inner py-10'>
      <ContentWrapper>
        <div className="flex items-start flex-col lg:flex-row gap-10">
          <main className="basis-[65%]">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-rose-600 lg:mb-6 lg:text-4xl dark:text-white">مقاله ها</h1>

            <div className="flex flex-col gap-10">
              <article className='shadow-md p-2 rounded-lg border-t-4'>
                <div className="flex flex-col gap-5">
                  <Link href={'/blogs/1'}>
                    <img className='rounded-lg' src="/images/blogs/post-1.jpg" alt="image post" />
                  </Link>
                  <Link href={'/blogs/1'}>
                    <h4 className='text-2xl text-rose-600'>نوشته به همراه تصویر</h4>
                  </Link>
                  <div className="text-gray-600">16 بهمن 1400 / بدون نظر / نویسنده: مدیر سایت</div>
                  <p className="text-gray-400 font-semibold">
                    لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته.
                  </p>
                </div>
              </article>
              <article className='shadow-md p-2 rounded-lg border-t-4'>
                <div className="flex flex-col gap-5">
                  <Link href={'/blogs/2'}>
                    <img className='rounded-lg' src="/images/blogs/post-1.jpg" alt="image post" />
                  </Link>
                  <Link href={'/blogs/2'}>
                    <h4 className='text-2xl text-rose-600'>نوشته به همراه تصویر</h4>
                  </Link>
                  <div className="text-gray-600">16 بهمن 1400 / بدون نظر / نویسنده: مدیر سایت</div>
                  <p className="text-gray-400 font-semibold">
                    لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته.
                  </p>
                </div>
              </article>
              <article className='shadow-md p-2 rounded-lg border-t-4'>
                <div className="flex flex-col gap-5">
                  <Link href={'/blogs/3'}>
                    <h4 className='text-2xl text-rose-600'>نوشته ساده - بدون هیچ چیز خاص</h4>
                  </Link>
                  <div className="text-gray-600">16 بهمن 1400 / بدون نظر / نویسنده: مدیر سایت</div>
                  <p className="text-gray-400 font-semibold">
                    لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته.
                  </p>
                </div>
              </article>
            </div>
          </main>
          <Sidebar />
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Blogs