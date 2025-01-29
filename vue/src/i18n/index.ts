import { createI18n } from 'vue-i18n'
import { zhHans } from './zh-hans'
import { en } from './en'
import { de } from './de'
import { ja } from './ja'
import { zhHant } from './zh-hant'

declare module 'vue' {
  export interface ComponentCustomProperties {
    $t(key: keyof IIBI18nMap, ...args: []): string
  }
}

export const getPreferredLang = () => {
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('zh')) {
    return /hk|tw|mo/.test(lang) ? 'zhHant' : 'zhHans'
  }
  switch (lang) {
    case 'de':
    case 'de-de':
      return 'de'
    case 'ja':
      return 'ja'
    default:
      return 'en'
  }
}

export const i18n = createI18n({
  locale: getPreferredLang(),
  fallbackLocale: 'en',
  messages: {
    zhHans,
    zhHant,
    zh: zhHans,
    en,
    de,
    ja
  },
  legacy: false
})

export const { t, locale } = i18n.global

export type IIBI18nMap = typeof zhHans
