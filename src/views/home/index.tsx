import { useTranslation } from 'react-i18next'

// Utils
import xxuLanguage from 'utils/lang'

// Assets
import logo from '../../assets/images/logo.svg'
import '../../assets/css/app.css'

const HomePage = (): JSX.Element => {
  const { t } = useTranslation(['common'])

  const handleChangeLanguage = (lang: string) => {
    xxuLanguage.SetCurrentLanguage(lang)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('common:welcome')}</p>
        <p>{`Current Lang: ${xxuLanguage.GetCurrentLanguage()}`}</p>
        <p>
          <button type="button" onClick={() => handleChangeLanguage('th')}>
            TH
          </button>
          <button type="button" onClick={() => handleChangeLanguage('en')}>
            EN
          </button>
        </p>
      </header>
    </div>
  )
}

export default HomePage
