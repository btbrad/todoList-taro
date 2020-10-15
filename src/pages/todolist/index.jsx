import React, { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import List from './components/List'

class TodoList extends Component {

  state = {
    list: [
      {
        id: 1,
        name: 'coding',
        done: false
      },
      {
        id: 2,
        name: 'fishing',
        done: true
      },
      {
        id: 3,
        name: 'hiking',
        done: false
      }
    ],
    newTodo: ''
  }

  componentDidMount() {
    console.log('组件挂载了')
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  render () {

    const { list, newTodo } = this.state

    return (
      <View>
        <Text>New Todo</Text>
        <Input type="text" placeholder="Please Enter" value={newTodo} onChange={this.handleChange}></Input>
        <List data={list} />
      </View>
    )
  }

}
export default TodoList