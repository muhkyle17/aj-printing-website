import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/Company/Hero'
import Founded from '../components/Company/Founded'

const Company = () => {
  return (
    <>
      <Head>
        <title>{'North Graphic Supplies'}</title>
        <link rel='icon' href='/NGS.png' />
      </Head>
      <Header />
      <Hero />
      <Founded />
      <Footer />
    </>
  )
}

export default Company
