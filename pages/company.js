import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/Company/Hero'
import Founded from '../components/Company/History'
import People from '../components/Company/People'

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
      <People />
      <Footer />
    </>
  )
}

export default Company
