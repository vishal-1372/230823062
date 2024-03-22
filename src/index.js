import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Image from './photo.webp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App adventureText="If you think Adventure is dangerous, try routine, it's genuinely lethal!" 
    routineText="Good morning all friends"  
    imageSource="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    imageAlt="Image" 
    followText="Follow" 
    ignoreText="Ignore"/>
    
  </React.StrictMode>
);

reportWebVitals();
