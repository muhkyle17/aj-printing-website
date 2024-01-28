import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import HealthcareProduct from '../../public/healthcare-product.jpeg'

const Healthcare = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/healthcare-hero.jpeg'
        title='Healthcare'
        description='At NGS, we understand the critical role that precision and reliability play in the healthcare industry.'
      />
      <About
        header='Streamline your administrative processes with our precise printing of patient forms, medical records, and administrative documents.'
        description='Our dedicated healthcare printing services are designed to meet the unique needs of healthcare providers, ensuring that your printed materials contribute to the seamless delivery of patient care. From wellness brochures to educational pamphlets, our printing services help you communicate vital information effectively. Make a lasting impression with personalized medical stationery. Our printing solutions cover letterheads, envelopes, prescription pads, and other stationery essentials tailored to your healthcare practice.'
        image={HealthcareProduct}
        height='h-[20rem]'
      />
    </Layout>
  )
}

export default Healthcare
