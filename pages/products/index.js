import Head from 'next/head'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import ProductsHero from '../../components/Products/common/ProductsHero'

const index = () => {
  return (
    <>
      <Head>
        <title>{'North Graphic Supplies'}</title>
        <link rel='icon' href='/NGS.png' />
      </Head>
      <Header />
      <ProductsHero
        backgroundImage='/products-index-hero.jpeg'
        title='Products'
        description='NGS products that match your printing needs'
      />
      <Footer />
    </>
  )
}

export default index
