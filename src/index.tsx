import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

WebFont.load({
  google: {
    families: ['Poppins:wght@400;700;900', 'Roboto:wght@400;700;900'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
