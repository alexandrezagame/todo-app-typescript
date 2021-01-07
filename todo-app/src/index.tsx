/* global TogetherJS */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <button onClick={() => {
      TogetherJS()
      return false
    }
    } >Start TogetherJS</button>

  </React.StrictMode>,
  document.getElementById('root')
);

