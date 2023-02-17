import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// useContext
import {UseContextProvider} from './component/UseContext';

//4- wrap all app with provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UseContextProvider>

        <App />
    </UseContextProvider>
);


