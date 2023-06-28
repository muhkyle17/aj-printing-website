import Head from 'next/head'
import Header from '../components/common/Header'
import Hero from '../components/home/Hero'
import CompanyPhilosophy from '../components/home/CompanyPhilosophy'
import Products from '../components/home/Products'
import Markets from '../components/home/Markets'
import ContactUs from '../components/home/ContactUs'
import Footer from '../components/common/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`North Graphic Supplies`}</title>
        <link rel='icon' href='/NGS.png' />
      </Head>
      <Header />
      <Hero />
      <CompanyPhilosophy />
      <Products />
      <Markets />
      <ContactUs />
      <Footer />
    </>
  )
}
