import { nextConfig } from 'constants/serverSettings'

type ClientLanguages = string[]
type ServerLanguages = string[] | undefined

export const validateServerDefaultLanguage = (DEFAULT_LOCALE_IDENTIFIER: string) => {
  const serverDefaultLocale = nextConfig?.publicRuntimeConfig?.defaultLocale

  if (serverDefaultLocale !== DEFAULT_LOCALE_IDENTIFIER) {
    throw new Error(
      `
      The default locale of your Next.js app is not the same as the default locale of GranoSafe.
      Please update your Next.js config to have the same locale as GranoSafe.
      Server: ${serverDefaultLocale}
      Client: ${DEFAULT_LOCALE_IDENTIFIER}
    `
    )
  }
}

export const validateServerLanguageMatch = (
  clientLanguages: ClientLanguages,
  callSignature: string
) => {
  const clientAvailableLanguages = clientLanguages
  const serverAvailableLanguages = nextConfig?.publicRuntimeConfig
    ?.locales as ServerLanguages

  const clientProvidesAllServerLanguages = serverAvailableLanguages?.every(l =>
    clientAvailableLanguages.includes(l)
  )

  const serverProvidesAllClientLanguages = clientAvailableLanguages?.every(l =>
    serverAvailableLanguages?.includes(l)
  )

  if (!(clientProvidesAllServerLanguages && serverProvidesAllClientLanguages)) {
    throw new Error(`
      The server and the client do not compress with the same nationalization settings.

      callSignature: ${callSignature}


      clientProvidesAllServerLanguages: ${clientProvidesAllServerLanguages}
      serverProvidesAllClientLanguages: ${serverProvidesAllClientLanguages}

      clientAvailableLanguages: ${clientAvailableLanguages}
      serverAvailableLanguages: ${serverAvailableLanguages}
    `)
  }
}
