import Layout from '../../components/common/Layout'
import ProductsHero from '../../components/Products/common/ProductsHero'
import Products from '../../components/Home/Products'

const index = () => {
  return (
    <Layout>
      <ProductsHero
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
