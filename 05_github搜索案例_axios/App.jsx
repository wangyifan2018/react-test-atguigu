import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users:[],
    isFirst:true, //是否第一次
    isLoading:false, //标识是否处于加载中
    err:'', //存储错误信息
  } //初始化状态

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>

    )
  }
}

