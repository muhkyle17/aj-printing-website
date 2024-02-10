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
        header='Our chemicals printing services are designed to provide reliable and compliant labeling solutions for a wide range of chemical products.'
        description1='We recognize that the chemical industry demands more than just labels; it requires a meticulous approach that aligns with regulatory standards and communicates critical information effectively. '
        description2='We ensure that your chemical products are labeled in accordance with international standards, promoting safety and compliance.'
        description3='Each chemical composition is unique, and our printing services allow you to convey specific hazards and safety instructions effectively.'
        image={ChemicalsProduct}
        height='h-[24.5rem]'
      />
    </Layout>
  )
}

export default Chemicals
