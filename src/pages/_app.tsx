import React, { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../sass/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={'/apple-touch-icon.png'}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={'/favicon-32x32.png'}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={'/favicon-16x16.png'}
        />
        <link rel='manifest' href={'/site.webmanifest'} />
        <link rel='mask-icon' href={'/safari-pinned-tab.svg'} color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
        <meta
          name='description'
          content='Anish Neupane is an Noob Developer | neupaneanish | anishneupane'
        />
        <title>Anish Neupane &#45; Noob Developer &#124; neupaneanish</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
