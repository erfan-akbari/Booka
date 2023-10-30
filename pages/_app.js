import Footer from '@/components/template/Footer'
import Header from '@/components/template/Header'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}
