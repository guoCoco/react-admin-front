import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import memory from '../../utils/memory'

export default class Admin extends Component {
    render() {
      const user = memory.user
      if (!user.username) {
        return <Redirect to='/login' />
      }
      return (
          <div>
              Admin{user.username}
          </div>
      )
    }
}
