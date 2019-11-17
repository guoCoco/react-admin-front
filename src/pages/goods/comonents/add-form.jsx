import React, { Component } from 'react'
import { Form, Input, Select } from 'antd'
import PropTypes from 'prop-types'
import { reqCategoryList } from '../../../api/index'

class AddForm extends Component {

  static propTypes = {
    parentId: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired
  }

  constructor(props){
    super(props)
    this.state = {
      categorys: [{_id: '0', name: '一级分类'}]
    }
  }

  componentWillMount() {
    this.props.setForm(this.props.form)
  }

  getCategorys = async () =>{

    const res = await reqCategoryList('0')
    const { code, data } = res
    let categorys = this.state.categorys.slice().concat(data)
    if (code === '0') {
      console.log(categorys)
      this.setState({
        categorys: categorys
      })
    }
  }

  componentDidMount() {
    this.getCategorys()
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { categorys } = this.state
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('parentId', {
            initialValue: this.props.parentId
          })(
            <Select>
              {
                categorys.map(item => <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>)
              }
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('categoryName', {
            initialValue: '',
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

export default Form.create()(AddForm)
