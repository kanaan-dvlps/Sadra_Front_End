import { useEffect } from 'react';
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux';
import en from "./lang/en.json";
import fa from "./lang/fa.json";
const messages = {
    en,
    fa,
};
const I18nProvider = ({ children }) => {
    const { language } = useSelector(state => state.setting);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('lang', language)
            document.documentElement.setAttribute('dir', language === 'en' ? 'ltr' : 'rtl')
        }
    }, [language])
    return (
        <IntlProvider
            messages={messages[language]}
            locale={language}
        >
            {children}
        </IntlProvider>
    )
}

export default I18nProvider
