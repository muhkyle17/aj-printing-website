import Image from 'next/image'
import Layout from '../../components/common/Layout'
import ProductsHero from '../../components/Products/common/ProductsHero'
// import RollToRollProduct from '../../public/roll-to-roll-labels-product.png'
import RollToRollProduct from '../../public/in-mould-label-product.jpeg'

const RollToRoll = () => {
  return (
    <Layout>
      <ProductsHero
        backgroundImage='/roll-to-roll-hero.jpeg'
        title='Roll to Roll Labels'
        description='Roll to roll labels by NGS will print out high quality printing labels for various applications such as product packaging, shipping labels, barcodes, and promotional stickers.'
      />
      <div className='container mx-auto mt-20 flex flex-row justify-center gap-10'>
        <div className='w-1/3 text-primary'>
          <h2 className='text-xl'>
            In-Mould is the intergration of the label with the packaging during the injection.
          </h2>
          <p>
            In this process, the label is placed into the IML injection mould, then melted
            thermoplastic polymer combines with the IML label and takes the shape of the mould.
            Thus, production of packaging and labeling are performed at the same time. IML process
            can be applied with blow moulding, injection moulding and thermoforming technologies.
            Today, In-Mould Labeling has become preferable because of the several major advantages
            by many sectors such as food, industrial pails, chemistry, health etc.
          </p>
        </div>
        <Image
          src={RollToRollProduct}
          alt='Product Type Image'
          className={`w-1/3 ${'max-h-[17rem]'}`}
        />
      </div>
    </Layout>
  )
}

export default RollToRoll
