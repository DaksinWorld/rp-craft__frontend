import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return <MoralisProvider appId="VKvYggp1w5ZnOYhktr5si0knZiSy4xHN4RlteCjl" serverUrl="https://2uljwpez5fci.usemoralis.com:2053/server">
      <Component {...pageProps} />
  </MoralisProvider>
}

export default MyApp
