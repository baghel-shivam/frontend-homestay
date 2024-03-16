import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Store from './Redux/Store.js'
=======
import Store from './Redux/Store'
>>>>>>> origin2/created-by-me-homestay
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
