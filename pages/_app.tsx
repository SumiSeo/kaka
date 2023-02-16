import "@/styles/base/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/comps/Layout";
import { AuthContextProvider } from "@/stores/authContext";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
