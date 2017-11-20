import React, {Compontent} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import Hello from './containers/Hello'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,   
    document.getElementById('root')
)
