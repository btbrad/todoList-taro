import React, { Component } from 'react'
import { View, Text, Input, Button } from '@tarojs/components'
import List from './components/List'
import { inject, observer } from 'mobx-react'
import './index.scss'

@inject('store')
@observer
class TodoList extends Component {

  state = {
    newTodo: ''
  }

  componentDidMount() {
    console.log('组件挂载了')
  }

  handleChange = (e) => {
    console.log(111, e.target.value)
    this.setState({
      newTodo: e.target.value
    })
  }

  handleAdd = () => {
    let { newTodo } = this.state
    const { todoStore } = this.props.store

    console.log(2222)

    if (!newTodo.length) {
      wx.showToast({
        title: 'Empty',
        icon: 'info',
        duration: 2000
      })
      return      
    }

    todoStore.addTodo({
      id: new Date().getTime(),
      name: newTodo,
      done: false
    })
  }

  render () {

    const { newTodo } = this.state
    const { todoStore: { list } } = this.props.store
    return (
      <View>
        <View className="input-box">
          <Text>NewTodo:</Text>
          <Input 
            type="text" 
            placeholder="Please Enter"
            style={{border: '2px solid #000'}} 
            value={newTodo} 
            onInput={this.handleChange}
          ></Input>
          <Button type="primary" size="mini" onClick={this.handleAdd}>添加</Button>
        </View>
        <List data={list} />
      </View>
    )
  }

}
export default TodoList