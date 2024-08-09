import React from 'react';
import Icon from '@mdi/react';
import { mdiFilePdfBox } from '@mdi/js';

const DownloadCV = () => {
  return (
    <div>
      <a href="/Luciano Mocchegiani cv 2024.pdf" download="Luciano Mocchegiani cv 2024.pdf">
        <h2>Download My CV</h2><Icon path={mdiFilePdfBox} size={1} />
      </a>
    </div>
  );
};

export default DownloadCV;
