import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import SheetedLabelsProduct from '../../public/sheeted-labels-product.jpeg'

const SheetedLabels = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/sheeted-labels-hero.jpeg'
        title='Sheeted Labels'
        description='Welcome to our Sheeted Labels Printing Services, where precision meets versatility in label creation.'
      />
      <About
        header='Our Sheeted Labels Printing Services are designed to cater to a spectrum of industries, offering a flexible and convenient solution for various applications. '
        description1='Our customization options ensure that each label serves its purpose with precision.'
        description2="Whether you're a small business looking for a reliable labeling solution or a large enterprise with diverse labeling needs, our state-of-the-art sheeted labels printing brings your designs to life with exceptional clarity and customization."
        description3='This attention to detail ensures that your branding remains professional and impactful.'
        image={SheetedLabelsProduct}
        height='max-h-[20rem]'
      />
    </Layout>
  )
}

export default SheetedLabels
