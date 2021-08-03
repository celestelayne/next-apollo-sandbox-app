import Link from 'next/link'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <h2>First Post</h2>
      <p>
        <Link href="/">
          Back to home
        </Link>
      </p>
    </Layout>
  )
}

export default Home;