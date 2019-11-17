/**
 * 入口js
 * */ 
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import storage from './utils/storage'
import memory from './utils/memory'

const user = storage.getUser()
// console.log(user)
memory.user = user

ReactDOM.render(
  <App />,
  document.getElementById('root')
)