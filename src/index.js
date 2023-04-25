import React from 'react';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import stores from './store/index';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
  useProxies: 'never',
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>
);
