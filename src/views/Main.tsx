import React from 'react';
import main from '../styles/main.module.scss';
import mandril from '../media/mandrill.jpeg';

export default function Main(): React.ReactElement {  
  return (
    <div className={main.root}>
      <img src={mandril} className={main.image}/>
      <img src={mandril} className={main.image}/>
    </div>
  );
}