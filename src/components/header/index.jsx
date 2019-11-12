import React, { Component } from 'react'
import  { withRouter } from 'react-router-dom'
import { Modal } from 'antd'

import './index.less'
import storage from '../../utils/storage'
import { formatDate } from '../../utils/index'
import menuList from '../../config/menu'
import LinkButton from '../../components/link-button'

const { confirm } = Modal

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: formatDate(Date.now()),
      title: ''
    }
  }

  getTitle = () => {
    const path = this.props.location.pathname
    let title
    menuList.forEach(item => {
      if (item.key === path) {
        title = item.title
      } else if (item.children) {
        const cItem = item.children.find(child => child.key === path)
        if (cItem) {
          title = cItem.title
        }
      }
    })
    return title
  }

  logout = () => {
    confirm({
      content: '是否确认退出登录状态?',
      onOk: () => {
        storage.removeUser()
        this.props.history.replace('/login')
      }
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const time = formatDate(Date.now())
      this.setState({time})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }



  render() {
    const username = storage.getUser().username || ''
    const { time } = this.state
    const title = this.getTitle()
    return (
      <div className='header'>
        <div className='header-top'>
          <span>欢迎，{username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>{title}</div>
          <div className='header-bottom-right'>
            <span style={{marginRight: 15}}>{time}</span>
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
