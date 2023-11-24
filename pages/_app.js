import Footer from '@/components/template/Footer'
import Header from '@/components/template/Header'
import MenuMobile from '@/components/template/MenuMobile'
import Navbar from '@/components/template/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function App({ Component, pageProps }) {

  const { asPath } = useRouter()
  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(prev => !prev);

  const controNavbar = () => {
    if (window.scrollY > 250) {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
    } else {
      setShow(false)
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controNavbar)
    return () => {
      window.removeEventListener('scroll', controNavbar)
    }
  }, [lastScrollY])

  useEffect(() => {
    setOpen(false)
  }, [asPath])

  return (
    <>
      <Header />
      <div className={`fixed top-0 left-0 right-0 -translate-y-20 ${show && 'translate-y-0'} transition-all duration-300 bg-stone-100 z-50 shadow-xl`}>
        <Navbar open={open} openDrawer={openDrawer} />
        <MenuMobile open={open} />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
