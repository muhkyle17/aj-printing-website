import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import BFProduct from '../../public/b&f-product.jpeg'

const BF = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/b&f-hero.jpeg'
        title='Binding & Finishing (B&F)'
        description='At NGS, we are your trusted partner for all your printing needs, offering a comprehensive range of services in Binding and Finishing (B&F).'
      />
      <About
        header='Our expert binding services ensure that your printed materials are presented professionally and durably.'
        description1='With a commitment to precision, quality, and innovation, we transform your ideas into tangible, beautifully finished products.'
        description2='We offer personalized solutions to meet your specific requirements, ensuring that your vision is translated flawlessly onto paper. With our efficient processes, we deliver your projects on time without compromising on quality.'
        description3='From precision cutting to sophisticated folding and collating, our finishing services add that extra layer of finesse to make your prints stand out.'
        image={BFProduct}
        height='h-[20rem]'
      />
    </Layout>
  )
}

export default BF
