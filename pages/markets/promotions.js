import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import PromotionsProduct from '../../public/promotions-product.jpeg'

const Promotions = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/promotions-hero.jpeg'
        title='Promotions'
        description='At NGS, we believe that every promotion is a unique opportunity to make a lasting impression. Our dedicated promotion printing services are crafted to elevate your brand, events, and campaigns through vibrant and impactful printed materials.'
      />
      <About
        header='Transform your promotional campaigns with our customized marketing materials.'
        description1='From eye-catching flyers to attention-grabbing posters, our printing services are tailored to make your brand stand out in the crowd.  Extend your brand reach with our range of branded merchandise.'
        description2="Make a statement at your events with our high-quality signage and banners. Whether it's a trade show, conference, or product launch, our printing solutions ensure your message is seen and remembered."
        description3='From promotional pens to personalized apparel, we offer printing services that turn everyday items into powerful brand ambassadors. Engage your audience directly with our direct mail printing services.'
        image={PromotionsProduct}
        height='h-[24.5rem]'
      />
    </Layout>
  )
}

export default Promotions
