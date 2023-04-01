import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Aj's Printing Website`}</title>
      </Head>
      <Header />
      <Hero />
    </>
  )
}
