import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let app = <div>Hello World</div>

let app2 = React.createElement('div', {}, 'Hello world 2');
ReactDOM.render(app, document.getElementById('testing-app'));

ReactDOM.render(<App />, document.getElementById('root'));


    


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
