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
        description='Roll to roll labels by NGS will print out high quality printing labels for various applications such as product packaging, shipping labels, barcodes, and promotional stickers.'
      />
      <About
        header='In-Mould is the intergration of the label with the packaging during the injection.'
        description='In this process, the label is placed into the IML injection mould, then melted
          thermoplastic polymer combines with the IML label and takes the shape of the mould. Thus,
          production of packaging and labeling are performed at the same time. IML process can be
          applied with blow moulding, injection moulding and thermoforming technologies. Today,
          In-Mould Labeling has become preferable because of the several major advantages by many
          sectors such as food, industrial pails, chemistry, health etc.'
        image={SheetedLabelsProduct}
        height='max-h-[25rem]'
      />
    </Layout>
  )
}

export default SheetedLabels
