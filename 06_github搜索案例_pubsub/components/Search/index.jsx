import PubSub from 'pubsub-js'
import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    //获取用户输入
    const {keyWordElement:{value:keyWord}} = this
    //发送请求前通知List更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true})
    PubSub.publish('atguigu', {isFirst:false,isLoading:true})

    //发送网络请求
    // https://api.github.com/search/users
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => { 
        // this.props.updateAppState({isLoading:false, users:response.data.items})
        PubSub.publish('atguigu', {isLoading:false, users:response.data.items})
      },
      error => {
        // this.props.updateAppState({isLoading:false, err:error.message})
        PubSub.publish('atguigu', {isLoading:false, err:error.message})
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
