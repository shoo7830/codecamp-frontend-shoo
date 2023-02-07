import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 나중에 할 것
  })
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}


export default MyApp