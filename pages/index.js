import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="InsightInput" content="Your first step into research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='flex justify-center'>
          <Image
            src="/whitetrans.png"
            width={500}
            height={500}
          />
        </div>

        <input type="text" name="search" id="searchInput" className='block mx-auto bg-white w-1/2 rounded-md p-2.5 text-black' />
      </div>
      <div class="main">
      </div>
    </div>
  )
}
