import React, { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'

class TodoList extends Component {

  state = {
    list: [
      {
        id: 1,
        todo: 'coding'
      },
      {
        id: 2,
        todo: 'fishing'
      },
      {
        id: 3,
        todo: 'hiking'
      }
    ],
    newTodo: ''
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
        {
          list.map(({todo, id}) => (
            <View key={id}>{todo}</View>
          ))
        }
      </View>
    )
  }

}
export default TodoList