import { get } from 'local-storage'

const xxuLanguage = {
  GetCurrentLanguage: (): string => {
    const lang = get<string>('i18nextLng') || 'th'
    return lang
  },
  SetCurrentLanguage: (lang: string) => {
    localStorage.setItem('i18nextLng', lang.toLowerCase())
    window.location.reload()
  }
}

export default xxuLanguage
