import React from 'react';
import Icon from '@mdi/react';
import { mdiFilePdfBox } from '@mdi/js';
import './Navbar.css';

const DownloadCV = ({clicked = false}) => {
  return (
    <div>
      <a className={clicked?'button-navBar':'buttonOculto-navBar'} href="/Luciano Mocchegiani cv 2024.pdf" download="Luciano Mocchegiani cv 2024.pdf">
        <p className='textButton-Navbar'>Download My CV </p> <Icon path={mdiFilePdfBox} size={1} />
      </a>
    </div>
  );
};

export default DownloadCV;
