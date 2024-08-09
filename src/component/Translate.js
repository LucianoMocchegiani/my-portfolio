import React from 'react';
import './Navbar.css';

const TranslateButtons = ({ clicked }) => {
  const handleTranslate = (lang) => {
    // Cambia el idioma en el widget de Google Translate
    const translateElement = document.querySelector('.goog-te-combo');
    if (translateElement) {
      translateElement.value = lang;
      translateElement.dispatchEvent(new Event('change'));
    }
  };

  const handleReset = () => {
    // Vuelve al idioma original en el widget de Google Translate
    handleTranslate('en');
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
        <p className='textButton-Navbar'>Spanish</p>
      </button>
      <button 
        className={clicked ? 'button-navBar' : 'buttonOculto-navBar'}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
        onClick={handleReset}>
        <p className='textButton-Navbar'>English</p>
      </button>
    </>
  );
};

export default TranslateButtons;
