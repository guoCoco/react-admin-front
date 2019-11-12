import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import logo from '../../assets/images/logo.png'
import menuList from '../../config/menu'
import './index.less'

const { SubMenu } = Menu;

/**
 * 默认展开项
 * 选中默认项的处理
*/

class LeftSider extends Component {
  
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname
    return menuList.map(item => {
      if (!item.children) {
        return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
        )
      } else {
        const cItem = item.children.find(cItem => cItem.key === path)
        if (cItem) {
          this.openKey = item.key
        }
        return (
          <SubMenu
          key={item.key}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          }>
            {
              this.getMenuNodes(item.children)
            }
          </SubMenu>
        )
      }
    })
  }

  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList)
    console.log(this.openKey)
  }

  render() {
    const path = this.props.location.pathname
    console.log(path)
    return (
      <div className='left-sider'>
        <Link to='/' className='left-sider-header'>
          <img src={logo} alt=""/>
          <h3>React 后台</h3>
        </Link>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[this.openKey]}
          mode="inline"
          theme="dark"
        >
          {
            this.menuNodes
          }
        </Menu>
      </div>
    )
  }
}

/**
 * withRouter 高阶组件
 * 修饰非路由组件，返回一个包含 history location match 三个属性的新组件
 * */ 

export default withRouter(LeftSider)
