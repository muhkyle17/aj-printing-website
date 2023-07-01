import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>North Graphic Supplies</title>
        <link rel='icon' href='/NGS.png'></link>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
