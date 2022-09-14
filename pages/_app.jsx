import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { Layout, Provider } from '../src/components'
import createEmotionCache from '../src/mui/createEmotionCache'
import theme from '../src/mui/theme'

const clientSideEmotionCache = createEmotionCache()

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <Provider emotion={emotionCache} theme={theme}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <CssBaseline />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}