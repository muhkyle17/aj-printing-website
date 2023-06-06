import Head from 'next/head'
import Header from '../components/common/Header'
import Hero from '../components/Hero'
import CompanyPhilosophy from '../components/CompanyPhilosophy'
import Products from '../components/Products'
import Markets from '../components/Markets'
import ContactUs from '../components/ContactUs'
import Footer from '../components/common/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Aj's Printing Website`}</title>
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
