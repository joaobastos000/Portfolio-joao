import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

function Navigation({ t }) {
  return (
    <div className="text-white-700 hover:text-white nav-link">
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-link" href="#home">
            {t('nav.home')}
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#about">
            {t('nav.about')}
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#work">
            {t('nav.work')}
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#contact">
            {t('nav.contact')}
          </a>
        </li>
      </ul>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(next);
  };
  const isEnglish = i18n.language === 'en';
  const usFlag = '/assets/logos/eua.svg';
  const brFlag = '/assets/logos/brazil.svg';
  const flagSrc = isEnglish ? usFlag : brFlag;

  return (
    <div className="relative inset-x-0 z-20 w-full backdrop-blur-lg bg-transparent/30">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-3xl font-bold transition-colors text-white-400 hover:text-white"
          >
            {t('nav.brand')}
          </a>

          <div className="hidden sm:flex items-center gap-4">
            <nav>
              <Navigation t={t} />
            </nav>
            <button
              onClick={toggleLang}
              aria-label={isEnglish ? 'Switch to Portuguese' : 'Switch to English'}
              className="px-1 py-0.5 rounded bg-white/10 hover:bg-white/20"
            >
              <img
                src={flagSrc}
                alt={isEnglish ? 'English' : 'Português'}
                className="w-7 h-7 rounded-full hover:scale-110 transition-transform"
              />
            </button>
          </div>

          <div className="sm:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              aria-label={isEnglish ? 'Switch to Portuguese' : 'Switch to English'}
              className="px-1 py-0.5 rounded bg-white/10 hover:bg-white/20"
            >
              <img
                src={flagSrc}
                alt={isEnglish ? 'English' : 'Português'}
                className="w-6 h-6 rounded-full"
              />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation t={t} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
