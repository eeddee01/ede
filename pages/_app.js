import '../styles/globals.css'
import Layout from '../components/layout'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://test2153.herokuapp.com/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Cours: {
            merge: true,
          },
          Ep:{
            merge: true,
          }
        },
      },
    },
  })
});


function MyApp({ Component, pageProps }) {
  return <>
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  </>
}

export default MyApp
