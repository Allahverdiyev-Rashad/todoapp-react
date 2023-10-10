import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TodoLayer} from "./context/TodoContext.jsx";
import reducer, {initialState} from "./context/reducer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoLayer initialState={initialState} reducer={reducer}>
            <App/>
        </TodoLayer>
    </React.StrictMode>,
)
