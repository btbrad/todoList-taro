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

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleAdd = () => {
    let { newTodo } = this.state
    const { todoStore } = this.props.store

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
    this.setState({
      newTodo: ''
    })
  }

  deleteAllDone = () => {
    const { todoStore } = this.props.store
    wx.showModal({
      title: '提示',
      content: `确定删除所有已完成todo吗？`,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          todoStore.list.forEach(item => {
            item.done && todoStore.deleteTodo(item.id)
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
        <View className='statistics'>
          <View>统计：{ list.filter(item => item.done).length } / {list.length}</View>
          <View className="del-all-done" onClick={this.deleteAllDone}>一键清除已完成</View>
        </View>
      </View>
    )
  }

}
export default TodoList