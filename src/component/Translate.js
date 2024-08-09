import React from 'react';

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
    <div>
      <button onClick={() => handleTranslate('es')}>Translate to Spanish</button>
      <button onClick={handleReset}>Back to English</button>
    </div>
  );
};

export default TranslateButtons;
