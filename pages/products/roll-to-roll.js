import Head from 'next/head'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Hero from '../../components/Products/RolltoRoll/Hero'

const RollToRoll = () => {
  return (
    <>
      <Head>
        <title>North Graphic Supplies</title>
        <link rel='icon' href='/NGS.png' />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default RollToRoll
