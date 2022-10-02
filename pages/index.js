import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useMemo } from 'react';
import Main from '../components/Main';

export default function Home() {



  return (
    <>
      <Head>
        <title>Insight Input</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="InsightInput" content="Your first step into research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>

  )
}
