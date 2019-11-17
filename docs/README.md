# react 相关语法

## setState()更新状态的两种写法
  - setState(updater, [callback])  
    updater为stateChange对象函数： 
    (state, props) => stateChange
  - setState(changeState, [callback])  
    stateChange为对象  
    callback为回调函数，状态更新页面更新后执行

  - 对象方式是函数方式的简写，  
    如果新状态不依赖原来的状态 使用对象方式  
    如果新状态依赖原理的状态使用函数方式  

  - setState是同步的还是异步的
    1. 执行setState()位置
        在react控制的回调函数中：生命周期钩子、react事件回调  
        非react控制的异步回调函数： 定时器回调、原生事件监听回调、promise回调、async await  
    2. 异步还是同步  
        react相关回调中是异步更新的  
        其他的回调是同步更新的（执行setState后直接执行render函数，再执行setState之后的内容）  

  - 异步setState()  
    1. 多次setState一起调用  
      - setState({}),合并更新一次状态，只调用一次render()更新页面， 状态更新和页面更新都合并了  
      - setState(fn),更新多次状态，只调用一次render()更新页面，，状态更新没有合并，界面更新合并  
      - setState(fn)/setState({}) 组合一起更新状态，
        如果 setState({})在前，setState(fn)在后，状态更新不合并，反之合并
    2. 在setState() 的callback中获取异步更新后的状态