import { get, set } from 'local-storage'

const xxuLanguage = {
  GetCurrentLanguage: (): string => {
    const lang = get<string>('i18nextLng') || 'th'
    return lang
  },
  SetCurrentLanguage: (lang: string) => {
    set<string>('i18nextLng', lang.toLowerCase())
    window.location.reload()
  }
}

export default xxuLanguage
