import React from 'react';
import Icon from '@mdi/react';
import { mdiFilePdfBox } from '@mdi/js';
import './Navbar.css';

const DownloadCV = ({ clicked = false }) => {
  return (
    <a
      className={clicked ? 'button-navBar' : 'buttonOculto-navBar'}
      href="/Luciano Mocchegiani cv 2024.pdf"
      download="Luciano Mocchegiani cv 2024.pdf"
      style={clicked?{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }:{ display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%'}}
    >
      <p className='textButton-Navbar'>Download CV</p>
      <Icon path={mdiFilePdfBox} size={1} />
    </a>
  );
};

export default DownloadCV;
