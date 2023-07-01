import Head from 'next/head'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import ProductsHero from '../../components/Products/common/ProductsHero'

const RollToRoll = () => {
  return (
    <>
      <Head>
        <title>North Graphic Supplies</title>
        <link rel='icon' href='/NGS.png' />
      </Head>
      <Header />
      <ProductsHero
        backgroundImage='/roll-to-roll-hero.jpeg'
        title={'Roll to Roll Labels'}
        description={
          'Roll to roll labels by NGS will print out high quality printing labels for various applications such as product packaging, shipping labels, barcodes, and promotional stickers.'
        }
      />
      <Footer />
    </>
  )
}

export default RollToRoll
