import Layout from '../../components/common/Layout'
import Hero from '../../components/ProductsMarkets/common/Hero'
import About from '../../components/ProductsMarkets/common/About'
import BarcodesProduct from '../../public/barcodes-product.jpeg'

const Barcodes = () => {
  return (
    <Layout>
      <Hero
        backgroundImage='/barcodes-hero.jpeg'
        title='Barcodes'
        description=' Our dedicated barcode printing services are tailored to meet the diverse needs of businesses seeking precision, reliability, and efficiency.'
      />
      <About
        header='We understand that the backbone of seamless inventory management, retail operations, and logistics lies in the clarity and accuracy of barcodes.'
        description='Elevate your product identification with our custom barcode labels. We offer a range of sizes, materials, and printing options to ensure your barcodes are not only functional but also align with your branding. Embrace the power of QR codes for interactive marketing, product information, and beyond. Our QR code printing services enable you to seamlessly integrate this versatile technology into your packaging and marketing materials.'
        image={BarcodesProduct}
        height='h-[20rem]'
      />
    </Layout>
  )
}

export default Barcodes
