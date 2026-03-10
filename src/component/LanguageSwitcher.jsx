import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language === 'vi' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('vi')}
      >
        Tiếng Việt
      </button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('en')}
      >
        English
      </button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-btn ${i18n.language === 'ja' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('ja')}
      >
        日本語
      </button>
    </div>
  );
}

export default LanguageSwitcher;
