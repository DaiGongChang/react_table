import React from 'react';
import {Provider} from 'react-redux'
import store from '../store'
import '../global.css'

export default ({children})=>{
  return (
    <Provider store={store}>
      <div>
        {children}
        </div>
    </Provider>
  )
}