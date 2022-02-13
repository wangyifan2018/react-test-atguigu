import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
  search = () => {
    //获取用户输入
    const {keyWordElement:{value:keyWord}} = this
    //发送请求前更新App状态
    this.props.updateAppState({isFirst:false,isLoading:true})
    //发送网络请求
    // https://api.github.com/search/users
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => { 
        this.props.updateAppState({isLoading:false, users:response.data.items})
      },
      error => {
        this.props.updateAppState({isLoading:false, err:error.message})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
