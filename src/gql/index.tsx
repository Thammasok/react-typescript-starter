import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'

// Configs
import { SERVICE_GRAPHQL } from 'configs'

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
  uri: SERVICE_GRAPHQL
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

const GraphQLProvider = ({ children }: GraphQLProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphQLProvider
