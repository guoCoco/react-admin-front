import React, { Component } from 'react'
import { Form, Input } from 'antd'
import PropTypes from 'prop-types'

class UpdateForm extends Component {

  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired
  }

  componentWillMount() {
    // console.log(this.)
    this.props.setForm(this.props.form)
  }

  render() {
    const { categoryName } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('categoryName', {
            initialValue: categoryName,
            rules: [{ required: true, message: '分类名称不能为空' }]
          })(
            <Input
              placeholder="请输入分类名称"
            />,
          )}
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(UpdateForm)
