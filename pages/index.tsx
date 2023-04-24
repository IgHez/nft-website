import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <main>
     <Head>
      <title>NFT Drop</title>
     </Head>
     <h1>welcome to the NFt drop challenge</h1>
    </main>
  )
}

export default Home