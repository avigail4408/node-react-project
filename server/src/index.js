import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "../src/app/store"
import {Provider} from "react-redux"
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
//import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/saga-green/theme.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
        <PrimeReactProvider>
    <Provider store = {store}>
    <App />
    </Provider>
    </PrimeReactProvider>
  </React.StrictMode>
);
