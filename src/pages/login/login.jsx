import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './login.less'

/**
 * */ 
class Login extends Component {

  /**
   * 1 表单验证 2 提交表单
   * 规则
   * 1 用户名密码必填 
   * 2 必须 大于 4 小于 12位
   * 3 必须是英文 数字 或下划线组成 
   * */ 

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 没有错误就是校验通过
        console.log('提交表单')
      }
    });
  }

  validatePwd = (rule, value, callback) => {
    console.log(value)
    if (!value) {
      callback('密码不能为空')
    } else if (value.length < 4) {
      callback('密码长度不能小于4')
    } else if (value.length > 12) {
      callback('密码长度不能大于12')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文 数字 或下划线组成 ')
    } else {
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login'>
        <header className='login-header'>
          <h1>React后台管理项目</h1>
        </header>
        <div className='login-content'>
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {
                getFieldDecorator('username', {
                  rules: [
                    { required: true, message: '用户名不能为空' },
                    { min: 3, message: '用户名至少3位' },
                    { max: 10, message: '用户名最多10位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文 数字 或下划线组成' }
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"/>
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [
                    { validator: this.validatePwd }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

/**
 * 高阶组价
 * 1 本质是一个函数
 * 2 接收一个组价（被包装） ，返回一个新组件（包装组价），包装组件向被包装组件传递特定的属性
 * 3 高阶组件就是一个修饰器
 * */ 
const WrappedLogin = Form.create({ name: 'normal_login' })(Login)

export default WrappedLogin
