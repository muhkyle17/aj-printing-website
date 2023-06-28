import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const products = () => {
  return (
    <>
      <Head>
        <title>{'North Graphic Supplies'}</title>
        <link rel='icon' href='/NGS.png' />
      </Head>
      <Header />
      <Footer />
    </>
  )
}

export default products
