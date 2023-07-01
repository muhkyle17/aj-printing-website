import Head from 'next/head'
import Header from '../components/common/Header'
import Hero from '../components/Home/Hero'
import CompanyPhilosophy from '../components/Home/CompanyPhilosophy'
import Products from '../components/Home/Products'
import Markets from '../components/Home/Markets'
import ContactUs from '../components/Home/ContactUs'
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
