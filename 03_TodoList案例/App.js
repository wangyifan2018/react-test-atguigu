//创建“外壳”组件App
import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import './App.css'
export default class App extends Component{
    //状态在哪里，操作App的状态就在哪里

    //初始化状态
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:true},
        {id:'004',name:'逛街',done:true},
    ]}

    //用于添加一个todo
    addTodo = (todoObj) => {
        //获取原todos
        const {todos} = this.state
        //追加一个tode
        const newTodos = [todoObj, ...todos]

        this.setState({todos:newTodos})
    }

    updateTodo = (id, done) =>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            if(todoObj.id === id) return {...todoObj, done:done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state

        const newTodos = todos.map((todoObj)=>{
            return {...todoObj, done}
        })
        //更新
        this.setState({todos:newTodos})
    }

    //删除一个todo
    deleteTodo = (id) => {
        const {todos} = this.state
        //删除指定id的todo
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    clearAllDone = () => {
        const {todos} = this.state

        const newTodo =  todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({todos: newTodo})
    }
    
    render() {
        const {todos} = this.state
        return (
            <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
            </div>
        )
    }
}
