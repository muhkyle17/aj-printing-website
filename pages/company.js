import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/company/Hero'
import History from '../components/company/History'
import People from '../components/company/People'

const Company = () => {
  return (
    <>
      <Head>
        <title>{'North Graphic Supplies'}</title>
        <link rel='icon' href='/NGS.png' />
      </Head>
      <Header />
      <Hero />
      <History />
      <People />
      <Footer />
    </>
  )
}

export default Company
