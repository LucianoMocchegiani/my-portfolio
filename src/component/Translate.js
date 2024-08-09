import React from 'react';
import './Navbar.css';

const TranslateButtons = () => {
  const handleTranslate = (lang) => {
    // Abre la página traducida en una nueva pestaña
    const url = `https://translate.google.com/translate?hl=${lang}&sl=auto&tl=${lang}&u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleReset = () => {
    // Abre la página original en una nueva pestaña
    window.open(window.location.href, '_blank');
  };

  return (
        <>
          <button 
            className={clicked ? 'button-navBar' : 'buttonOculto-navBar'}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
              onClick={() => handleTranslate('es')}>
             <p className='textButton-Navbar'>Spanish</p>/button>
          <button 
              onClick={handleReset}>
              <p className='textButton-Navbar'>English</p>
          </button>
      </>

  );
};

export default TranslateButtons;
