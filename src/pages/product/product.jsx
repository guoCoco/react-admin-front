import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProductAddUpdate from './add-update'
import ProductDetail from './detail'
import ProductHome from './home'

export default class Manager extends Component {
  render() {
    return (
      <Switch>
        {/* exact 完全匹配 */}
        <Route path='/product' exact component={ProductHome} />
        <Route path='/product/detail' component={ProductDetail} />
        <Route path='/product/addUpdate' component={ProductAddUpdate} />
        <Redirect to='/product' />
      </Switch>
    )
  }
}
