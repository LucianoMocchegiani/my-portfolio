import React from 'react';
import Icon from '@mdi/react';
import { mdiFilePdfBox } from '@mdi/js';
import './Navbar.css';

const DownloadCV = ({ clicked = false }) => {
  return (
    <a
      className={clicked ? 'button-navBar' : 'buttonOculto-navBar'}
      href="/Luciano Mocchegiani 2024 CV.pdf"
      download="Luciano Mocchegiani cv 2024.pdf"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
      }}
    >
      <p className='textButton-Navbar'>Download CV</p>
      <Icon path={mdiFilePdfBox} size={1} />
    </a>
  );
};

export default DownloadCV;
