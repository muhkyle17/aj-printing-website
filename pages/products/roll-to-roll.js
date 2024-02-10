import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import RollToRollProduct from '../../public/roll-to-roll-product.avif'

const RollToRoll = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/roll-to-roll-hero.jpeg'
        title='Roll to Roll Labels'
        description='Roll to roll labels by NGS will print out high quality printing labels for various applications such as product packaging, shipping labels, barcodes, and promotional stickers.'
      />
      <About
        header='With a focus on versatility and scalability, we bring your label designs to life with unparalleled clarity and consistency.'
        description1='Our Roll-to-Roll Labels Printing Services are engineered to meet the dynamic demands of industries ranging from manufacturing and logistics to retail and beyond.'
        description2='From product labels to packaging stickers, we understand the importance of tailored solutions. Choose from a variety of materials, finishes, and sizes to create labels that perfectly complement your brand image.'
        description3='Whether you need labels for consumer goods, industrial products, or promotional materials, our roll-to-roll printing accommodates a wide array of applications.'
        image={RollToRollProduct}
        height='max-h-[25rem]'
      />
    </Layout>
  )
}

export default RollToRoll
