import Layout from '../../components/common/Layout'
import Hero from '../../components/Products/common/Hero'
import Markets from '../../components/Home/Markets'

const markets = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/market-index-hero.jpeg'
        title='Markets'
        description='NGS products that match your printing needs'
      />
      <div className='mt-24'>
        <Markets />
      </div>
    </Layout>
  )
}

export default markets
