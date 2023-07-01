import Head from 'next/head'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import ProductsHero from '../../components/Products/common/ProductsHero'
import Products from '../../components/Home/Products'

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
      <div className='mt-24'>
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default index
