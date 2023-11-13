import ScrollToTopButton from '@/components/ScrollToTopButton'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return<>
  <Component {...pageProps} />
  <ScrollToTopButton />
  </> 
}
