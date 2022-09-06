import { I18n } from 'i18n-js'
import RNLocalize from 'react-native-localize'

import en, { StringsObjType } from './en'
import es from './es'

const i18n = new I18n()

export const languages = ['en', 'es']

type TranslationType = {
  en: StringsObjType,
  es: StringsObjType,
}

const translations: TranslationType = {
  en,
  es,
}

export const getLocale = (): string => {
  let locale = ''
  const locales = RNLocalize.getLocales()
  if (locales.length) {
    locale = locales[0].languageTag
  }
  const index = locale.indexOf('-')
  const language = index === -1 ? locale : locale.substr(0, index)
  const region = index === -1 ? 'US' : locale.substr(index + 1)

  if (languages.indexOf(language) > -1) {
    return locale
  }
  switch (language) {
  case 'ca':
  case 'gl':
  case 'eu':
    return `es-${region}`
  default:
    return `en-${region}`
  }
}

export const getLanguage = (): string => {
  const locale = getLocale()
  const localeLC = locale.toLowerCase()
  if (languages.indexOf(localeLC) > -1) {
    return locale
  }
  const index = localeLC.indexOf('-')
  const language = index === -1 ? localeLC : localeLC.substr(0, index)
  return language || 'en'
}

i18n.locale = getLocale()
i18n.enableFallback = true
i18n.translations = translations

export type LocaleType = 'en' | 'es'

class Language {
  constructor(type?: LocaleType) {
    const lang = type || getLanguage()
    Object.keys(en)
      .forEach((key) => {
        Object.defineProperty(this, key, {
          get: (): string | (() => string) => {
            const l = translations[lang as keyof TranslationType]
            // @ts-ignore
            return l[key as keyof StringsObjType]
          },
        })
      })
  }
}

// @ts-ignore
const translator: StringsObjType = new Language('en')

export default translator
