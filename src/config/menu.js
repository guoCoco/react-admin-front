const menuList = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '商品',
    icon: 'shopping',
    key: '/goods',
    children: [
      {
        title: '商品列表',
        icon: 'profile',
        key: '/goods/gategory'
      },
      {
        title: '商品管理',
        icon: 'appstore',
        key: '/product'
      }
    ]
  },
  {
    title: '用户管理',
    icon: 'user',
    key: '/user'
  },
  {
    title: '角色管理',
    icon: 'cluster',
    key: '/role'
  },
  {
    title: '图形列表',
    icon: 'area-chart',
    key: '/charts',
    children: [
      {
        title: '饼图',
        icon: 'pie-chart',
        key: '/pie'
      },
      {
        title: '柱状图',
        icon: 'bar-chart',
        key: '/bar'
      }
    ]
  },
]
export default menuList