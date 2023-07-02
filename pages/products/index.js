import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import Products from '../../components/Home/Products'

const index = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/products-index-hero.jpeg'
        title='Products'
        description='NGS products that match your printing needs'
      />
      <div className='mt-24'>
        <Products />
      </div>
    </Layout>
  )
}

export default index
