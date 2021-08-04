import { gql } from '@apollo/client';
import client from '../apollo-client';

import Link from 'next/link'
import Layout from '../components/Layout'

const Home = ({ countries }) => {
  console.log(countries)
  return (
    <Layout>
      <h2>List of Countries</h2>
      <div>
        {countries.map(country => (
          <p>{country.name} &mdash; {country.emoji}</p>
        ))}
      </div>
      <p>
        <Link href="/">
          Back to home
        </Link>
      </p>
    </Layout>
  )
}

export async function getStaticProps(){
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `
  });
  return {
    props: {
      countries: data.countries.slice(0, 4)
    }
  }
}

export default Home;