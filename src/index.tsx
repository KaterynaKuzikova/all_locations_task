import React, { Suspense } from 'react';
import App from './App/App';
import { createRoot } from "react-dom/client";
import { Loader } from "./Loader/Loader";
import { Provider } from 'react-redux';
import { store } from './store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
const container = document.getElementById("root");

if (!container) {
  throw new Error("Container Root not fined!");
}

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={<Loader />}>
        <GlobalStyle />
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>
);
