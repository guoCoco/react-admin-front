import React, { Component } from 'react'
import { Modal, Card, Table, Button, Icon } from 'antd'
import LinkButton from '../../components/link-button/index'
import { reqCategoryList, reqUpdateCategory } from '../../api/index'
import AddForm from './comonents/add-form'
import UpdateForm from './comonents/update-form'

export default class Category extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      loading: false,
      parentId: '0',
      subCategoryName: '',
      modalStatus: 0
    }
  }

  getInfo =  (category) => {
    console.log(category)
    const { _id, name } = category
    this.setState({
      parentId: _id,
      subCategoryName: name
    }, () => {
      this.getCategorys()
    })
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
        render: (category) => (
          <span>
            <LinkButton onClick={() => this.showUpdateCategory(category)}>修改分类</LinkButton>
            {this.state.parentId === '0' ? <LinkButton onClick={() => {this.getInfo(category)}}>查看子分类</LinkButton> : null}
          </span>
        ),
      }
    ]
  }

  getCategorys = async () =>{
    const { parentId } = this.state
    this.setState({
      loading: true
    })

    const res = await reqCategoryList(parentId)
    
    const { code, data } = res
    if (code === '0') {
      console.log(data)
      this.setState({
        dataSource: data,
        loading: false
      })
    }
  }

  showAddCategory = () => {
    this.setState({
      modalStatus: 1
    })
  }

  handleCancel = () => {
    // 关闭弹框前 清除表单数据
    // 清除数据
    this.form.resetFields()

    this.setState({
      modalStatus: 0
    })
  }

  showUpdateCategory = (category) => {
    this.category = category
    this.setState({
      modalStatus: 2
    })
  }

  // 更新分类
  updateCategory = async() => {
    // 1. 关闭弹框
    this.setState({
      modalStatus: 0
    })

    
    const categoryId = this.category._id
    const categoryName = this.form.getFieldValue('categoryName')

    // 清除数据
    this.form.resetFields()


    // 2. 发送请求更新
    const res = await reqUpdateCategory({categoryId, categoryName})
    if (res.code === '0') {
       // 3.重新渲染列表
      this.getCategorys()
    }
  }

  addCategory = () => {}

  getBackCategory = () => {
    this.setState({
      parentId: '0'
    }, () => {
      this.getCategorys()
    })
  }

  componentWillMount() {
    this.initColumns()
  }

  componentDidMount() {
    
    this.getCategorys()
  }

  render() {
    const { dataSource, loading, parentId, subCategoryName, modalStatus } = this.state

    // 需要加一个 || 运算 在初始化第一次加载页面的时候 this.category是undefined
    const category = this.category || {}

    const title =  parentId === '0' ? '商品分类' : (
      <span>
        <LinkButton onClick={this.getBackCategory}>商品分类</LinkButton>
        <Icon type='arrow-right' style={{marginRight: 5}}/>
        {subCategoryName}
      </span>
    )
    const extra = (<Button type="primary" onClick={this.showAddCategory}>
      <Icon type='plus'></Icon>
      添加
    </Button>)
    
    return (
      <Card title={title} extra={extra}>
        <Table rowKey='_id' loging={loading} pagination={{defaultPageSize: 5}} bordered columns={this.columns} dataSource={dataSource} />
      
        <Modal
          title="添加分类"
          visible={modalStatus === 1}
          onOk={this.addCategory}
          onCancel={this.handleCancel}>
          <AddForm/>
        </Modal>
        <Modal
          title="修改分类"
          visible={modalStatus === 2}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}>
          {/* 通过props 属性进行 父传子 数据通信 */}
          <UpdateForm categoryName={category.name} setForm={(form) => {this.form = form}} />
        </Modal>
      </Card>
     
    )
  }
}
