import ContentWrapper from '@/components/module/ContentWrapper'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <ContentWrapper>
      <section class="bg-white dark:bg-gray-900 shadow-md">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-rose-700">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">چیزی یافت نشد</p>
            <p class="mb-4 text-lg text-gray-500 dark:text-gray-400 font-semibold">
              متأسفیم، ما نمی توانیم آن صفحه را پیدا کنیم. در صفحه اصلی چیزهای زیادی برای کاوش خواهید یافت.
            </p>
            <Link href="/" class="inline-flex text-white bg-rose-700 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
            بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>
    </ContentWrapper>
  )
}

export default NotFound