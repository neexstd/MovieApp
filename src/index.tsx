import App from './App';
import './App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './components/app/store';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
