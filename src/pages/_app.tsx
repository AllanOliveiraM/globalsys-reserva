import { AppProps as NextAppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import Meta from 'components/common/Meta'

import { Slide } from 'utils/toasts'

import GlobalStyle from 'theme/GlobalStyle'

import 'react-toastify/dist/ReactToastify.css'
import '@granosafe/design-system/dist/preflight.css'

type AppProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any
} & NextAppProps

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastContainer position='bottom-left' transition={Slide} />
      <GlobalStyle />
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default App
