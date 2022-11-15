import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import './index.css';
// basename = '/goit-react-hw-05-movies/';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);
