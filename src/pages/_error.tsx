import * as Sentry from '@sentry/nextjs'

const ErrorComponent = () => <p>temp error page</p>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
ErrorComponent.getInitialProps = async (contextData: any) => {
  await Sentry.captureUnderscoreErrorException(contextData)

  return {}
}

export default ErrorComponent
