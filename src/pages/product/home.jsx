import React, { Component } from 'react'
import { Card, Select, Button, Input, Icon} from 'antd'

export default class ProductHome extends Component {
  render() {
    const title = (
      <span>
        <Select value="1">
          <option value="1">按名称检索</option>
          <option value="2">按描述检索</option>
        </Select>
        <Input placeholder='请输入内容' style={{width: 200, margin: '0 15px'}}/>
        <Button type='primary'>搜索</Button>
      </span>
    )

    const extra = (
      <Button type='primary'>
        <Icon type='plus'/>
        添加商品
      </Button>
    )

    return (
      <Card title={title} extra={extra}>

      </Card>
    )
  }
}
