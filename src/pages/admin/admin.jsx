import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import storage from '../../utils/storage'
import Header from '../../components/header'
import LeftSider from '../../components/left-sider'

// 引入二级页面
import Home from '../home/home'
import Bar from '../charts/bar'
import Pie from '../charts/pie'
import Role from '../role/role'
import User from '../user/user'
import Category from '../goods/category'
import Product from '../product/product'

const { Footer, Sider, Content } = Layout;
export default class Admin extends Component {
    render() {
      const user = storage.getUser()
      console.log(user)
      if (!user.username) {
        return <Redirect to='/login' />
      }
      return (
        <Layout style={{height: '100%'}}>
          <Sider>
            <LeftSider />
          </Sider>
          <Layout>
            <Header />
            <Content style={{margin: 20,backgroundColor: '#fff'}}>
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/bar' component={Bar} />
                <Route path='/pie' component={Pie} />
                <Route path='/role' component={Role} />
                <Route path='/user' component={User} />
                <Route path='/goods/gategory' component={Category} />
                <Route path='/product' component={Product} />
                <Redirect to='/home' />
              </Switch>
            </Content>
            <Footer style={{textAlign: 'center'}}>footer</Footer>
          </Layout>
        </Layout>
      )
    }
}
