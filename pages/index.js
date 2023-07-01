import Layout from '../components/common/Layout'
import Hero from '../components/Home/Hero'
import CompanyPhilosophy from '../components/Home/CompanyPhilosophy'
import Products from '../components/Home/Products'
import Markets from '../components/Home/Markets'
import ContactUs from '../components/Home/ContactUs'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CompanyPhilosophy />
      <Products />
      <Markets />
      <ContactUs />
    </Layout>
  )
}
