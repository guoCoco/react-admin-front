import React, { Component } from 'react'
import { Card, Table, Button, Icon } from 'antd'
import LinkButton from '../../components/link-button/index'
import { reqCategoryList } from '../../api/index'

export default class Category extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      loading: false
    }
  }


  initColumns = () => {
    this.columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        width: 350,
        render: () => (
          <span>
            <LinkButton>修改分类</LinkButton>
            <LinkButton>查看子分类</LinkButton>
          </span>
        ),
      }
    ]
  }

  getCategorys = async () =>{

    this.setState({
      loading: true
    })

    const res = await reqCategoryList('0')
    
    const { code, data } = res
    if (code === '0') {
      console.log(data)
      this.setState({
        dataSource: data,
        loading: false
      })
    }
  }

  componentWillMount() {
    this.initColumns()
  }

  componentDidMount() {
    
    this.getCategorys()
  }

  render() {
    const title = '商品分类'
    const { dataSource, loading } = this.state
    const extra = (<Button type="primary">
      <Icon type='plus'></Icon>
      添加
    </Button>)
    
    return (
      <Card title={title} extra={extra}>
        <Table rowKey='_id' loging={loading} pagination={{defaultPageSize: 5}} bordered columns={this.columns} dataSource={dataSource} />
      </Card>
    )
  }
}
