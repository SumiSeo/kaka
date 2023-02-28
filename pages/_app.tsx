import "@/styles/base/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/comps/Layout";
import TestHasuraComp from "./TestHasuraComp";
// import { AuthContextProvider } from "@/stores/authContext";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://kaka.hasura.app/v1/graphql",
});

export default function App({ Component, pageProps }: AppProps) {
  const authLink = setContext((_, { headers }) => {
    const token = "your-x-hasura-admin-secret-token-here";
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret":
          "qaR3sCTYKFVfVcAq1WxcqLAUIP4R55LxMXS49kYBHMPNLicnzOYDJ0Pkdz4JCpsN",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <TestHasuraComp />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
