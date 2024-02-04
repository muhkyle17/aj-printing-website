import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import ChemicalsProduct from '../../public/chemicals-product.jpeg'

const Chemicals = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/chemicals-hero.jpeg'
        title='Chemicals'
        description='Innovating Labels for Chemical Excellence'
      />
      <About
        header='We recognize that the chemical industry demands more than just labels; it requires a meticulous approach that aligns with regulatory standards and communicates critical information effectively.'
        description='Our chemicals printing services are designed to meet these exacting needs, providing reliable and compliant labeling solutions for a wide range of chemical products. We ensure that your chemical products are labeled in accordance with international standards, promoting safety and compliance.'
        image={ChemicalsProduct}
        height='h-[23rem]'
      />
    </Layout>
  )
}

export default Chemicals
