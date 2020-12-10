import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {AppPropsType, subscribe} from "./redux/State";

const rerenderFullTree=(state:AppPropsType)=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderFullTree(state)
subscribe(rerenderFullTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
