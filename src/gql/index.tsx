import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'

export interface GraphQLProviderProps {
  children:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined
}

export const link = createHttpLink({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

const GraphQLProvider = ({ children }: GraphQLProviderProps) => {
  console.log('client', client)
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphQLProvider
