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
        description="From eye-catching flyers to attention-grabbing posters, our printing services are tailored to make your brand stand out in the crowd. Make a statement at your events with our high-quality signage and banners. Whether it's a trade show, conference, or product launch, our printing solutions ensure your message is seen and remembered. Extend your brand reach with our range of branded merchandise. From promotional pens to personalized apparel, we offer printing services that turn everyday items into powerful brand ambassadors. Engage your audience directly with our direct mail printing services. We specialize in creating compelling and personalized direct mail materials that capture attention and drive responses."
        image={PromotionsProduct}
        height='h-[25rem]'
      />
    </Layout>
  )
}

export default Promotions
