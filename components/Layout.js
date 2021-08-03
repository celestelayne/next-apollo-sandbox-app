import Head from 'next/head';
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Layout({ children }) {
  return(
    <div className="Layout py-8 px-8 bg-gray-50">
      <Head>
        <meta 
          name="description"
          content="Learn all about the Next React framework."
        />
        <title>Next Blog Site</title>
      </Head>
      <Header/>
      <div className="Content text-gray-500">
        {children}
      </div>
      <Navigation />
    </div>
  )
}

