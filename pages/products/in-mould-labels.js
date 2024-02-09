import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import RollToRollProduct from '../../public/in-mould-label-product.jpeg'

const InMouldLabels = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/in-mould-labels-hero.jpeg'
        title='In Mould Labels'
        description='Roll to roll labels by NGS will print out high quality printing labels for various applications such as product packaging, shipping labels, barcodes, and promotional stickers.'
      />
      <About
        header='In-Mould is the integration of the label with the packaging during the injection.'
        description1='In this process, the label is placed into the IML injection mould, then melted thermoplastic polymer combines with the IML label and takes the shape of the mould. Thus, production of packaging and labeling are performed at the same time.'
        description2='IML process can be applied with blow moulding, injection moulding and thermoforming technologies.'
        description3='Today, In-Mould Labeling has become preferable because of the several major advantages by many sectors such as food, industrial pails, chemistry, health etc.'
        image={RollToRollProduct}
        height='max-h-[17rem]'
      />
    </Layout>
  )
}

export default InMouldLabels
