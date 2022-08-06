import 'styles/global.scss'
import type { AppProps } from 'next/app'
import 'core'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
