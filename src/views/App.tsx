import React from 'react';
import logo from '../media/logo.svg';
import app from '../styles/App.module.scss';
import Main from './Main';

function App(): React.ReactElement {  
  return (
    <div className={app.app}>
      <header className={app.appHeader}>
        <img src={logo} className={app.appLogo} alt='logo' />
      </header>
      <Main />
    </div>
  );
}

export default App;
