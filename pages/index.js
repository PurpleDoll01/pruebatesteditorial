import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
import Main from '../components/partials/Main'
import Head from 'next/head'

export default function Home() {
  return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          <title>Grupo Editorial Criterio</title>
          <meta charSet="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name="keywords" content="Grupo Editorial Criterio,Editorial Criterio,Criterio,Editorial,Animal Político,Animal Gourmet,Newsweek Español,Newsweek,Gaceta Reinvindicación Sindical,RS,Verificado,Criterio Hidalgo,Daniel Moreno"></meta>
          <meta name="description" content="En editorial Criterio creemos en la transparencia, acceso a la información, rendición de cuentas y el combate a la corrupción."></meta>
        </Head>
        <Header />
        <Main />
        <Footer />
      </>
  )
}
